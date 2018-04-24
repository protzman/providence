import React, { Component } from 'react'
import Fade from 'material-ui/transitions/Fade'
import mapboxgl from 'mapbox-gl'
import faker from 'faker'

import LoadScreen from './LoadScreen'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Byb3R6bWFuIiwiYSI6ImNqOXJtYnFxZjAwbzkzMnBjb2xsZ2doaXkifQ.WWy_q1IKflDyt4mJxJyUEw'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 1.5,
      loaded: false
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
      zoom: 3
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
      // map.flyTo({
      //   center: [-77.009, 38.889],
      //   zoom: 13,
      //   speed: 0.7,
      //   easing(t) {
      //     return t
      //   }
      // })
      setTimeout(() => { this.setState({ loaded: true }) }, 2000)
    })
  }

  render() {
    console.log(this.state.loaded)
    return (
      <div>
        {/* <Fade in={!this.state.loaded} timeout={400}>
          <div>
            <LoadScreen />
          </div>
         </Fade> */}
        {this.state.loaded ? '' : <LoadScreen />}
        <div ref={el => this.mapContainer = el} className="map absolute top right left bottom" />
      </div>
    )
  }
}

export default Map
