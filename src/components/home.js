import React from 'react'
import {Link} from 'react-router-dom'
import QuestionLead from '../containers/questLead'
import AnswerLead from '../containers/answLead'

import StatusBar from './loginbar'
import './home.css'

const Home  = () =>{

    return(
    <div className='maincontainer'>
        <StatusBar />
        <div className='homeblok'>
            <div className='homeblokitem1'>
                <QuestionLead />
            </div>
            <div className='homeblokitem'>
                <AnswerLead />
            </div>
        </div>
        <div id='linkZone'><Link className='regLink' id='linkBack' to='/'>Back to questions</Link></div>
    </div>
    )
}



export default Home