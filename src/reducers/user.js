import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILUER } from '../actions'

export default function user(state = {
  info: {},
  fetching: false,
  error: null
}, action) {
  const { type, response, error } = action
  console.log(action)
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
    default:
      return state
  }
}
