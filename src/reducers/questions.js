import {ADD_NEW_QUESTION, ADD_INIT_QUESTIONS} from '../actions/constants'

const questions = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_QUESTION:
      return state.concat(action.payload)
    case ADD_INIT_QUESTIONS:
      return state.concat(action.payload)  
    default:
      return state
  }
}

export default questions



