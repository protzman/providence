import React, { Component } from 'react'
import Backdrop from 'material-ui/Modal/Backdrop'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Byb3R6bWFuIiwiYSI6ImNqOXJtYnFxZjAwbzkzMnBjb2xsZ2doaXkifQ.WWy_q1IKflDyt4mJxJyUEw'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/sprotzman/cjg6t32wv1l6m2ro2qz0vzma8',
      center: [lng, lat],
      attributionControl: false,
      logoPosition: 'bottom-right',
      zoom
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div className="map-container">
        <div ref={el => this.mapContainer = el} className="map absolute top right left bottom" />
      </div>
    )
  }
}

export default Map
