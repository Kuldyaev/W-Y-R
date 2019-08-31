import {ADD_NEW_ANSWER, ADD_NEW_LEFT_ANSWER, ADD_NEW_RIGHT_ANSWER, ADD_INIT_ANSWERS} from './constants'

function transform(questions) {
    const answ2 = {}
    const answ = Object.keys(questions).map((k) => {
        return {[questions[k].id]:{
                        'var1': questions[k].optionOne.votes,
                        'var2': questions[k].optionTwo.votes,
                }  
           }
         })
    answ.forEach((a)=>{
        answ2[Object.keys(a)[0]] = Object.values(a)[0]
    })
    
    return answ2     
}


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

const addInitAnswers = (questions) => ({
    type: ADD_INIT_ANSWERS,
    payload: transform(questions)
})



export {addNewAnswer, addNewLeftAnswer, addNewRightAnswer, addInitAnswers}



