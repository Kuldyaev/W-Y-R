import React, { Component } from 'react'
import LogBut from './logbut'
import AvaIcon from './avatarka'
import '../components/home.css'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../actions/authUser'

class StatusBar extends Component{
    render(){
         const check = this.props.authUser === null 
            ? "Log in" 
            : "Log out" 
        
        const checkLink  = this.props.authUser === null
            ?  '/logpage' 
            : '/'
            
        const infoLog  = this.props.authUser !== null
            ? 'We glad to see you '
            : 'You are not authorized yet'   
        
        const changeStat = () => {
            const{clearAuthedUser }= this.props;
            if(this.props.authUser !== null){clearAuthedUser();}
         }
        
    return(
    <div className='statusbar'>
        <div className='statusitem'>
            <p className='statusstring'>{infoLog}{((this.props.authUser !==0)&&(this.props.authUser))}</p>
        </div>
        <AvaIcon value= {((this.props.authUser === null)&&(' '))|| ((this.props.authUser !== null)&&(this.props.users[this.props.authUser].ava)) }
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



export default connect(state=>({users: state.users,  authUser: state.status}), {clearAuthedUser})(StatusBar)