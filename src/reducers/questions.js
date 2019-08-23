import startQuestions from '../store/questions'
import {ADD_NEW_QUESTION} from '../actions/constants'

const questions = (state = startQuestions, action) => {
  switch (action.type) {
    case ADD_NEW_QUESTION:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default questions



