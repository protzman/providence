import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserHistory } from 'history'

import { Provider } from 'react-redux'

import './index.css'
import '../node_modules/react-resizable/css/styles.css'
import '../node_modules/react-grid-layout/css/styles.css'


import App from './components/App'
import { getStore } from './getStore'
import registerServiceWorker from './registerServiceWorker'

require('dotenv').config()

const history = createBrowserHistory()
const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
