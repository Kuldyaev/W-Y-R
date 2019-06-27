import React,{  Component } from 'react'
import { Link } from 'react-router-dom'


class LogBut extends Component{
    render(){
      return(
        <Link className='logPageButton' to={this.props.checkLink} onClick={this.props.changeStat}>
            <button>
                {this.props.check}  
            </button>
        </Link>
        )
}}



export default LogBut;