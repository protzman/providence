import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserHistory } from 'history'


import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import '../node_modules/react-resizable/css/styles.css'
import '../node_modules/react-grid-layout/css/styles.css'


import App from './App'
import reducer from './reducers'
import rootSaga from './sagas/sagas'
import registerServiceWorker from './registerServiceWorker'

require('dotenv').config()

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)
//  Run the root saga
sagaMiddleware.run(rootSaga)

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
