import React from 'react'
import StatusBar from './loginbar'
import {Link} from 'react-router-dom'
import './home.css'

const HelpPage  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <div className='homeblok1'>
            <p>&nbsp;&nbsp;&nbsp;Hello!</p>
            <p>This is "Would You Rather" project in <a href='https://www.udacity.com/course/react-nanodegree--nd019'>React&Redux</a>&nbsp;
             course from <a href='https://www.udacity.com/'>UDACITY</a>.</p>
            <p>Here a user answers questions based on two options given.</p>
            <p>To join us You need to <Link to='/reg'>register</Link>.</p>
            <p>After <Link to='/logpage'>authorization</Link>, you can create your own questions and answer existing ones.</p>
            <p>Additional information can be found on the <Link to='/help'>help page</Link>.</p>
            <br/>
            <p>Instalation</p>
            <p> 1: Clone this project git clone <a href='https://github.com/Kuldyaev/W-Y-R'>https://github.com/Kuldyaev/W-Y-R</a></p>
            <p> 2: Install all project dependencies (via npm) "npm install"</p>
            <p> 3: Start the development server "npm start"</p>
            <p></p>
            <p>Usage</p>
            <p>The project can be viewed in the browser at <a href='http://localhost:3000'>http://localhost:3000</a></p>
            <p>At this time, the app does not use a real database. Changes will not persist between sessions.</p>
        </div>
    </div>
    )
}



export default HelpPage