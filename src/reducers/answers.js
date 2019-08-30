import {ADD_NEW_ANSWER, ADD_NEW_LEFT_ANSWER, ADD_NEW_RIGHT_ANSWER, ADD_INIT_ANSWERS} from '../actions/constants'

const answers = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_ANSWER:
      return {...state, 
          [action.id]:action.body
      };
    case ADD_NEW_LEFT_ANSWER:
      return {...state, 
          [action.id]:{...state[action.id],
             var1: state[action.id].var1.concat(action.user)
          }
      };   
    case ADD_NEW_RIGHT_ANSWER:
      return {...state, 
          [action.id]:{...state[action.id],
             var2: state[action.id].var2.concat(action.user)
          }
      }; 
    case ADD_INIT_ANSWERS:
      return action.payload       
         
       
    default:
      return state
  }
}

export default answers