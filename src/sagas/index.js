import { all, fork } from 'redux-saga/effects'
import { watchFetchUserRequest, watchPostUserRequest } from './user'


function* clientSagas() {
  yield all([
    fork(watchFetchUserRequest),
    fork(watchPostUserRequest)
  ])
}

export default function* mainSaga() {
  yield all([
    fork(clientSagas)
  ])
}
