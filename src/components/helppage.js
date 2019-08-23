import React from 'react'
import StatusBar from './loginbar'
import './home.css'

const HelpPage  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <div className='homeblok'>
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