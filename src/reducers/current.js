import {ADD_NEW_USER} from '../actions/constants'
import startUsers from '../store/users'


const users = (state = startUsers, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {...state, 
      [action.id] : {id: action.id, 
                username: action.id,
                password: action.password,
                ava: action.ava}}
    default:
      return state
  }
}

export default users