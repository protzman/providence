import { all, fork } from 'redux-saga/effects'
import { watchFetchUserRequest } from './user'


function* clientSagas() {
  yield all([
    fork(watchFetchUserRequest)
  ])
}

export default function* mainSaga() {
  yield all([
    fork(clientSagas)
  ])
}
