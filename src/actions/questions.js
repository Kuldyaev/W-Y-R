import {ADD_NEW_QUESTION} from './constants'



const addNewQuestion = (id, author, var1, var2) => ({
    type: ADD_NEW_QUESTION,
    payload: {id, author, var1, var2}
})

export {addNewQuestion}