import React from 'react'
import StatusBar from './loginbar'
import QuestionList from '../containers/questionlist'
import './home.css'

const Questions  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <h3 id='formtitle'>Cтраница c  вопросами</h3>
        <QuestionList />
    </div>
    )
}



export default Questions