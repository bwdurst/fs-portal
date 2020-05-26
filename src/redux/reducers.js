import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      // console.log(state)
      return [...state, action.value]
    case 'DELETE_LISTING':
      const newState = [...state]
      // console.log(newState, action.value)
      newState.splice(action.value, 1)
      return newState
    default:
      return state
  }
}

export default combineReducers({ businesses })