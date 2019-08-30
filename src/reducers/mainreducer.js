import { combineReducers } from 'redux'
import status from './login'
import questions from './questions'
import users from './current'
import answers from './answers'
import { loadingBarReducer } from 'react-redux-loading-bar'


const reducer = combineReducers({
    users,
    questions,
    status,
    answers,
    loadingBar: loadingBarReducer,
});

export default reducer