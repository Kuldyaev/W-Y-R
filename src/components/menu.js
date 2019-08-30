import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar  = () =>{
    return(
    <div className='menubar'>
        <Link className='menuitem' to='/'>Questions</Link>
        <Link className='menuitem' to='/leaderboard'>Leaderboard</Link>
        <Link className='menuitem' to='/statistic'>Statistic</Link>
        <Link className='menuitem' to='/help'>Help</Link>
        
    </div>
    )
}



export default MenuBar