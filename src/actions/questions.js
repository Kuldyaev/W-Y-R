import {ADD_NEW_QUESTION, ADD_INIT_QUESTIONS} from './constants'



const addNewQuestion = (id, author, var1, var2) => ({
    type: ADD_NEW_QUESTION,
    payload: {id, author, var1, var2}
})

const addInitQuestions = (questions) => ({
    type: ADD_INIT_QUESTIONS,
    payload: Object.keys(questions).map((k) => {
        return {'id': questions[k].id,
                'author': questions[k].author,
                'var1': questions[k].optionOne.text,
                'var2': questions[k].optionTwo.text,
        }
         
        }
    )
    
})

export {addNewQuestion, addInitQuestions}