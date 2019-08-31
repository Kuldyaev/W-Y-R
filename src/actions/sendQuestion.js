import {showLoading, hideLoading} from 'react-redux-loading'
import { saveQuestion } from '../utils/api';
import {addNewQuestion} from '../actions/questions'



function handleSaveQuestion(qid, optionOneText, optionTwoText, author ) {
    return (dispatch) => {
        dispatch(showLoading())
        
        return saveQuestion({qid, optionOneText, optionTwoText, author })
            .then((data) => {               
                dispatch(addNewQuestion(data.id, data.author, data.optionOne.text, data.optionTwo.text))}
                )
            .then(() => {
                 dispatch(hideLoading())
               })    
            .catch(function (error) {console.log(error.message);});  
    }
}



export {handleSaveQuestion}