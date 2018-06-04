import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import firebase from 'firebase'
import firebaseApp from '../firebase'
import {
  fetchUserFailure,
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  postUserFailure,
  postUserSuccess,
  POST_USER_REQUEST
} from '../actions'


// -------------------------  helper functions -------------------------
function* fetchAndParseResponse(login) {
  console.log('calling fetchAndParse: ', login)
  const url = `https://api.github.com/users/${login}`
  const response = yield axios({
    method: 'get',
    url
  })
  return response.data
}

function* postAndParseResponse(payload) {
  const response = yield firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .catch((error) => {
      console.log(error)
    })
  console.log('calling postAndParse: ', payload)
  // const response = yield axios({
  //   method: 'post',
  //   url,
  //   data: payload
  // })
  // const response = yield firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
  //   .catch((error) => {
  //     console.log(error)
  //   })
  return response.data
}

// ------------------------- generator functions -------------------------

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

function* postUser(action) {
  const { payload } = action
  try {
    const response = yield call(postAndParseResponse, payload)
    yield put(postUserSuccess, response)
  } catch (error) {
    console.log('error, ', error)
    yield put(postUserFailure(payload, error.message))
  }
}

// ------------------------- watcher functions -------------------------

export function* watchFetchUserRequest() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUser)
}

export function* watchPostUserRequest() {
  yield takeEvery(POST_USER_REQUEST, postUser)
}
