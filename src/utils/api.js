import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

export function getInitialData() {
    return Promise.all(
    [ 
        _getUsers(),
        _getQuestions(),
    ]
        
    ).then(data => data)
}

export function saveQuestion(qid, optionOneText, optionTwoText, author) {
    return _saveQuestion(qid, optionOneText, optionTwoText, author)
}

export function saveQuestionAnswer({authedUser, qid, answer}) {
       return _saveQuestionAnswer({authedUser, qid, answer})
}

