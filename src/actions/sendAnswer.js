import {showLoading, hideLoading} from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api';


function handleVoteLeftBtn(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading())
        
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                 dispatch(hideLoading())
               })
            .catch(function (error) {console.log(error.message);});  
    }
}

function handleVoteRightBtn(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading())
        
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                 dispatch(hideLoading())
               })
            .catch(function (error) {console.log(error.message);});  
    }
}

export {handleVoteLeftBtn, handleVoteRightBtn}