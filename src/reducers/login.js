
import {CHANGE_AUTHED, CLEAR_AUTHED} from '../actions/constants'



const status = (state = null, action) => {
              switch (action.type) {
                case CHANGE_AUTHED:
                  return action.payload
                case CLEAR_AUTHED:
                  return null
                default:
                  return state
  }
}

export default status

