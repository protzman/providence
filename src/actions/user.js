import { makeActionCreator } from '../utils'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILUER = 'FETCH_USER_FAILURE'

export const fetchUserRequest = makeActionCreator(FETCH_USER_REQUEST, 'login')
export const fetchUserSuccess = makeActionCreator(FETCH_USER_SUCCESS, 'login', 'response')
export const fetchUserFailure = makeActionCreator(FETCH_USER_FAILUER, 'login', 'error')

export const POST_USER_REQUEST = 'POST_USER_REQUEST'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const POST_USER_FAILURE = 'POST_USER_FAILURE'

export const postUserRequest = makeActionCreator(POST_USER_REQUEST, 'payload')
export const postUserSuccess = makeActionCreator(POST_USER_SUCCESS, 'payload', 'response')
export const postUserFailure = makeActionCreator(POST_USER_FAILURE, 'payload', 'error')
