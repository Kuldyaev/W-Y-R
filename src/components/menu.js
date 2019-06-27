import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar  = () =>{
    return(
    <div className='menubar'>
        <Link className='menuitem' to='/'>Home</Link>
        <Link className='menuitem' to='/questions'>Questions</Link>
        <Link className='menuitem' to='/statistic'>Statistic</Link>
        <Link className='menuitem' to='/help'>Help</Link>
        
    </div>
    )
}



export default MenuBar