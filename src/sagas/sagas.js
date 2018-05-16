import { put, all, fork, call, take } from 'redux-saga/effects'
import { api } from '../services'

import { getUser } from '../reducers/selectors'
import * as actions from '../actions'

// each entity below defines three creators { request, success, failure}
const { user, metrics } = actions

// **************************************** subroutines **************************************** //

/**
 * Reusable fetch subroutine
 * @param {*} entity user | metrics
 * @param {*} apiFunction api.fetchUser | etc...
 * @param {*} id an id for the the item to fetch
 * @param {*} url the url for the request
 */
function* fetchEntity(entity, apiFunction, id, url) {
  console.log('------------------------------------')
  yield put(entity.request(id))
  const { response, error } = yield call(apiFunction, url || id)
  console.log('response:', response)
  if (response) {
    yield put(entity.success(id, response))
  } else {
    console.log('error in fetch call')
    yield put(entity.failure(id, error))
  }
}

/**
 * Bound generators below for api calls using fetch query
 */
export const fetchUser = fetchEntity.bind(null, user, api.fetchUser)
export const fetchMetrics = fetchEntity.bind(null, metrics, api.fetchMetrics)


function* loadUser(login, requiredFields) {
  console.log('*********************loaduser')
  yield call(fetchUser, login)
}

// load metrics unless it is cached
function* loadMetrics(id) {
  yield call(fetchMetrics, id)
}

// *************************************** watcher sagas *************************************** //

function* watchLoadUserPage() {
  while (true) {
    const { login, requiredFields = [] } = yield take(actions.LOAD_USER_PAGE)
    yield fork(loadUser, login, requiredFields)
  }
}

function* watchLoadMetricsPage() {
  const { id } = yield take(actions.LOAD_METRICS_PAGE)
  yield fork(loadMetrics, id)
}

export default function* root() {
  yield all([
    fork(watchLoadUserPage),
    fork(watchLoadMetricsPage)
  ])
}
