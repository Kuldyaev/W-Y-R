import React, {Component} from 'react'
import {Link,  Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'
import {setAuthedUser} from '../actions/authUser'

class LogForm extends Component{
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
        console.log("Введен логин:",this.state.username);
        console.log("Введен пароль:",this.state.pass);
        const currName = this.state.username;
        const row = Object.keys(this.props.users).some(function(key){return key === currName});
        if(row){  
            if(this.props.users[this.state.username].password === this.state.pass)
                {
                    this.props.setAuthedUser(currName);
                }
            else {alert("Wrong Password")}
            
        } else {alert("Wrong Username or Password")};
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
                <h3 id='formtitle'>Login form</h3>
                <form onSubmit={this.handleSubmit} 
                className='loginForm' 
                encType='multipart/form-data'>
                    <input type='text' name='username' placeholder='Username'  className='loginFormItem' onChange={this.handleUsernameChange} />
                    <input type='text' name='password' placeholder='Password' className='loginFormItem' onChange={this.handlePassChange}/>
                    <input type="submit" className='loginFormItem' value="Log in" />
                </form>
                <Link className='regLink' to='/reg'>Registration</Link>
            </div>
        )
    }  
}

export default connect(state=>({users: state.users,  authUser: state.status,}), {setAuthedUser})(LogForm)

