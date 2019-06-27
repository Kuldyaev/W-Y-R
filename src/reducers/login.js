
import {CHANGE_AUTHED, CLEAR_AUTHED} from '../actions/constants'



const status = (state = {
        authSuccess: false,
        authUser: 0
        }, action) => {
              switch (action.type) {
                case CHANGE_AUTHED:
                  return action.payload
                case CLEAR_AUTHED:
                  return action.payload
                default:
                  return state
  }
}

export default status

