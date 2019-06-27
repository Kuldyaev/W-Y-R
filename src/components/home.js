import React from 'react'
import StatusBar from './loginbar'
import './home.css'

const Home  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <div>
            <p>Домашняя страница</p>
        </div>
    </div>
    )
}



export default Home