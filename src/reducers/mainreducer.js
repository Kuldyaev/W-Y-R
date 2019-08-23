import { combineReducers } from 'redux'
import status from './login'
import questions from './questions'
import users from './current'
import answers from './answers'


const reducer = combineReducers({
    users,
    questions,
    status,
    answers,
});

export default reducer