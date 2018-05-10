import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserHistory } from 'history'
import './index.css'
import './fade.css'
import '../node_modules/react-resizable/css/styles.css'
import '../node_modules/react-grid-layout/css/styles.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

require('dotenv').config()

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
  , document.getElementById('root')
)

registerServiceWorker()
