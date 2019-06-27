import React, { Component } from 'react'
import LogBut from './logbut'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../actions/authUser'

class StatusBar extends Component{
     render(){
                 
        const check = this.props.logstat.authUser === 0 
            ? "Log in" 
            : "Log out" 
        
        const checkLink  = this.props.logstat.authUser === 0
            ?  '/logpage' 
            : '/'
            
        const infoLog  = this.props.logstat.authUser !== 0
            ? 'We glad to see you '
            : 'You are not authorized yet'   
        
        const changeStat = () => {
            const{clearAuthedUser }= this.props;
            if(this.props.logstat.authUser !== 0){clearAuthedUser();}
         }
        
        
    return(
    <div className='statusbar'>
        <div className='statusitem'>
            <p>{infoLog}{((this.props.logstat.authUser !==0)&&(this.props.logstat.authUser))}</p>
        </div>
        <div className='menuitem'>   
           <LogBut 
                changeStat={changeStat}
                check={check}
                checkLink={checkLink}
           />
        </div>
        
    </div>
    )
}}



export default connect(state=>({logstat: state.status}), {clearAuthedUser})(StatusBar)