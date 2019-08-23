import React from 'react'
import StatusBar from './loginbar'
import StatisticList from '../containers/statisticlist'
import './home.css'

const Statistic  = () =>{
    return(
    <div className='maincontainer'>
        <StatusBar />
        <StatisticList />
    </div>
    )
}



export default Statistic