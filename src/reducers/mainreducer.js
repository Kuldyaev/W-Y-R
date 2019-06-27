import { combineReducers } from 'redux'
import status from './login'
import QestionsReducer from './questions'
import users from './current'

const reducer = combineReducers({
    users,
    questions: QestionsReducer,
    status,
});

export default reducer