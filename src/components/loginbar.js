import React, { Component } from 'react'
import LogBut from './logbut'
import AvaIcon from './avatarka'
import '../components/home.css'
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
            <p className='statusstring'>{infoLog}{((this.props.logstat.authUser !==0)&&(this.props.logstat.authUser))}</p>
        </div>
        <AvaIcon value= {((this.props.logstat.authUser ===0)&&(' '))|| ((this.props.logstat.authUser !==0)&&(this.props.users[this.props.logstat.authUser].ava)) }
       />
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



export default connect(state=>({users: state.users,  authUser: state.status, logstat: state.status}), {clearAuthedUser})(StatusBar)