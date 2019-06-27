import { ADD_NEW_USER} from '../actions/constants'
import startUsers from '../store/users'


const users = (state = startUsers, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return [
          {...state},
        {"5" : {
        id: 5,
        username: 'Slava5',
        password: 'Slava5'
    }}
      ]
    default:
      return state
  }
}

export default users