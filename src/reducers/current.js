import {ADD_NEW_USER, ADD_INIT_USERS} from '../actions/constants'

const users = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {...state, 
      [action.id] : {id: action.id, 
                username: action.id,
                password: action.password,
                ava: action.ava}}
    case ADD_INIT_USERS:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default users