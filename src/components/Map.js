import React, { Component } from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import faker from 'faker'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import { point } from '@turf/helpers'
import distance from '@turf/distance'
import along from '@turf/along'
import LoadScreen from './LoadScreen'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Byb3R6bWFuIiwiYSI6ImNqOXJtYnFxZjAwbzkzMnBjb2xsZ2doaXkifQ.WWy_q1IKflDyt4mJxJyUEw'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6,
    zIndex: 1300
  }
})


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 1.5,
      loaded: false,
      map: {}
    }
  }

  componentDidMount() {
    console.log('initial state:', this.state.loaded)
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/sprotzman/cjg6t32wv1l6m2ro2qz0vzma8',
      attributionControl: false,
      logoPosition: 'bottom-right',
      // default to washington dc
      center: [-77.009, 38.889],
      zoom: 0
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.on('load', () => {
      this.setState({ map })
    })

    // map.on('load', () => {
    //   map.flyTo({
    //     center: [-77.009, 38.889],
    //     zoom: 13,
    //     speed: 0.7,
    //     easing(t) {
    //       return t
    //     }
    //   })
    //   setTimeout(() => { this.setState({ loaded: true, map }) }, 2000)
    // })
    this.drawArc(map, [-77.032, 38.913], [37.617, 55.755])
    // t0his.drawArc(map, [-77.032, 38.913], [116.407, 39.904])
  }

  drawArc(map, from, to) {
    // Washington DC
    const origin = from

    // Moscow
    const destination = to

    // A simple line from origin to destination.
    const route = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            origin,
            destination
          ]
        }
      }]
    }

    // A single point that animates along the route.
    // Coordinates are initially set to origin.
    const geopoint = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: origin
        }
      }]
    }

    // Calculate the distance in kilometers between route start/end point.

    const dist = distance(point(origin), point(destination), { units: 'kilometers' })

    const arc = []

    // Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    const steps = 300

    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < dist; i += dist / steps) {
      const segment = along(route.features[0], i, 'kilometers')
      arc.push(segment.geometry.coordinates)
    }

    // Update the route with calculated arc coordinates
    route.features[0].geometry.coordinates = arc

    // Get a temp number to make the source for this iteration unique
    const rand = faker.random.number().toString()

    // Used to increment the value of the point measurement against the route.
    let counter = 0

    map.on('load', () => {
      setTimeout(() => { this.setState({ loaded: true, map }) }, 2000)

      // Add a source and layer displaying a point which will be animated in a circle.
      map.addSource(`route-${rand}`, {
        type: 'geojson',
        data: route
      })

      map.addSource(`point-${rand}`, {
        type: 'geojson',
        data: geopoint
      })

      map.addLayer({
        id: `route-${rand}`,
        source: `route-${rand}`,
        type: 'line',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#ed6498',
          'line-width': 5,
          'line-opacity': 0.5
        }
      })

      // TODO make radius bigger or smaller based on data amount
      map.addLayer({
        id: `point-${rand}`,
        source: `point-${rand}`,
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ed6498'
        }
      })

      function animate() {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
        geopoint.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter]

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculate between the current point and the next point, except
        // at the end of the arc use the previous point and the current point

        // geopoint.features[0].properties.bearing = bearing(
        //   point(route.features[0].geometry.coordinates[counter >= steps ? counter - 1 : counter]),
        //   point(route.features[0].geometry.coordinates[counter >= steps ? counter : counter + 1])
        // )

        // Update the source with this new data.
        map.getSource(`point-${rand}`).setData(geopoint)

        // Request the next frame of animation so long the end has not been reached.
        if (counter < steps) {
          requestAnimationFrame(animate)
        }

        counter += 1

        if (counter === steps) {
          counter = 0
        }
      }

      // document.getElementById('replay').addEventListener('click', () => {
      //   // Set the coordinates of the original point back to origin
      //   point.features[0].geometry.coordinates = origin

      //   // Update the source layer
      //   map.getSource('point').setData(point)

      //   // Reset the counter
      //   counter = 0

      //   // Restart the animation.
      //   animate(counter)
      // })

      // Start the animation.
      animate(counter)
    })
  }

  render() {
    const { map } = this.state.map
    const { classes } = this.props
    return (
      <div>
        {/* <Fade in={!this.state.loaded} timeout={400}>
          <div>
            <LoadScreen />
          </div>
         </Fade> */}
        {this.state.loaded ? '' : <LoadScreen />}
        <div ref={x => this.mapContainer = x} className="map absolute top right left bottom" >
          {map}
        </div>

        <Button variant="fab" className={classes.fab} onClick={this.handleClick} >
          <AddIcon />
        </Button>
      </div>
    )
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired
}

const enhance = compose(withStyles(styles))
export default enhance(Map)
