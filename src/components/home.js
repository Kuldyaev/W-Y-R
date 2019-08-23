import React from 'react'
import StatusBar from './loginbar'
import {Link} from 'react-router-dom'
import './home.css'

const Home  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <div className='homeblok'>
            <p>&nbsp;&nbsp;&nbsp;Hello!</p>
            <p>This is "Would You Rather" project in <a href='https://www.udacity.com/course/react-nanodegree--nd019'>React&Redux</a>&nbsp;
             course from <a href='https://www.udacity.com/'>UDACITY</a>.</p>
            <p>Here a user answers questions based on two options given.</p>
            <p>To join us You need to <Link to='/reg'>register</Link>.</p>
            <p>After <Link to='/logpage'>authorization</Link>, you can create your own questions and answer existing ones.</p>
            <p>Additional information can be found on the <Link to='/help'>help page</Link>.</p>
            
        </div>
    </div>
    )
}



export default Home