import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { fetchUserFailure, FETCH_USER_REQUEST, fetchUserSuccess } from '../actions'

function* fetchAndParseResponse(login) {
  console.log('calling fetchAndParse: ', login)
  const url = `https://api.github.com/users/${login}`
  const response = yield axios({
    method: 'get',
    url
  })
  return response.data
}

function* fetchUser(action) {
  const { login } = action
  try {
    const user = yield call(fetchAndParseResponse, login)
    yield put(fetchUserSuccess(login, user))
  } catch (error) {
    console.log('error', error)
    yield put(fetchUserFailure(login, error.message))
  }
}

export function* watchFetchUserRequest() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUser)
}
