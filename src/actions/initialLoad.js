import {showLoading, hideLoading} from 'react-redux-loading'
import {getInitialData} from '../utils/api'
import {addInitQuestions} from '../actions/questions'
import {addInitUsers} from '../actions/users'
import {addInitAnswers} from '../actions/answers'


export function handleInitialLoad() {
    return (dispatch) => {
        dispatch(showLoading())
        
        return getInitialData()
            .then(([users, questions]) => {
                dispatch(addInitQuestions(questions))
                dispatch(addInitAnswers(questions))
                dispatch(addInitUsers(users))
                dispatch(hideLoading())
        })
    }
}