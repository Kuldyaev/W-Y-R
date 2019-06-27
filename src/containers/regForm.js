import React, {Component} from 'react'
import {Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'
import {addNewUser} from '../actions/users'

class RegForm extends Component{
    constructor(props){
		super(props);
		this.state={
			username : '',
			pass : '',
        };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    
    handleSubmit(event) {
		event.preventDefault();
        const newUser = this.state.username
        const newPass = this.state.pass
        const conditions = true;
        const row = Object.keys(this.props.users).some(function(key){return key === newUser});
        if (row) {alert("User with this name allredy exist. Try again!")}
        else{
            if(conditions){addNewUser(newUser, newPass)}
            else {alert("Username or password doesn't match requirement. Try again!")}}
	}
	
	handleUsernameChange(event){
		this.setState({username: event.target.value});
	}
 
	handlePassChange(event){
		this.setState({pass: event.target.value});
		
	}
 
    
    render(){
        if (this.props.authUser.authSuccess === true) {
            return (
                <Redirect to='/' />
            );
}
        
        return(
            <div className='maincontainer'>
                <h3 id='formtitle'>Registration form</h3>
                <form onSubmit={this.handleSubmit} 
                className='loginForm' 
                encType='multipart/form-data'>
                    <input type='text' name='username' placeholder='Username'  className='loginFormItem' onChange={this.handleUsernameChange} />
                    <input type='text' name='password' placeholder='Password' className='loginFormItem' onChange={this.handlePassChange}/>
                    <input type="submit" className='loginFormItem' value="Log on" />
                </form>
                <Link className='regLink' to='/logpage'>Log in</Link>
            </div>
        )
    }  
}

export default connect(state=>({users: state.users,  authUser: state.status,}), {addNewUser})(RegForm)

