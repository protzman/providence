import { combineReducers } from 'redux'
import { merge } from 'lodash/merge'
import * as ActionTypes from '../actions'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

function user(state = { userData: { data: { name: null } } }, action) {
  switch (action.type) {
    case ActionTypes.USER.SUCCESS:
      return { ...state, userData: action.payload }
    default:
      return state
  }
}

export default combineReducers({
  entities,
  errorMessage,
  user
})
