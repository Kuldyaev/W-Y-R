import React from 'react'
import StatusBar from './loginbar'
import UserList from '../containers/userlist'
import './home.css'

const Statistic  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <div>
            <p>Cтраница статистики</p>
            <UserList />
        </div>
    </div>
    )
}



export default Statistic