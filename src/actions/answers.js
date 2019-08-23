import {ADD_NEW_ANSWER, ADD_NEW_LEFT_ANSWER, ADD_NEW_RIGHT_ANSWER} from './constants'



const addNewAnswer = (id, var1, var2) => ({
    type: ADD_NEW_ANSWER,
    id: id,
    body: { 'var1': var1, 
            'var2': var2,
    }
})

const addNewLeftAnswer = (id, user) => ({
    type: ADD_NEW_LEFT_ANSWER,
    id,
    user,
})

const addNewRightAnswer = (id, user) => ({
    type: ADD_NEW_RIGHT_ANSWER,
    id,
    user,
})


export {addNewAnswer, addNewLeftAnswer, addNewRightAnswer}



