import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILUER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE
} from '../actions'

export default function user(state = {
  info: {},
  response: {},
  fetching: false,
  posting: false,
  error: null
}, action) {
  const { type, response, error } = action
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, fetching: true, error: null }
    case FETCH_USER_SUCCESS:
      return {
        ...state, fetching: false, info: response, error: null
      }
    case FETCH_USER_FAILUER:
      return {
        ...state, fetching: false, info: null, error
      }
    case POST_USER_REQUEST:
      return {
        ...state, posting: true, error: null
      }
    case POST_USER_SUCCESS:
      return {
        ...state, posting: false, response, error: null
      }
    case POST_USER_FAILURE:
      return {
        ...state, fetching: false, response: null, error
      }
    default:
      return state
  }
}
