import { createStore, applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'


const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS()
  return state
}

const logger = createLogger({
  stateTransformer,
})

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  // dev tools middleware
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const middlewares = [sagaMiddleware, logger]
  const composables = [applyMiddleware(...middlewares), reduxDevTools]
  const enhancer = compose(...composables)
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}
