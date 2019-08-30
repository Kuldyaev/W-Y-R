import React, {Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import StatusBar from '../components/loginbar'
import '../components/home.css'
import {addNewQuestion} from '../actions/questions'


class NewQuestion extends Component{
    constructor(props){
		super(props);
		this.state={
			var1 : '',
			var2 : '',
        };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleVar1Change = this.handleVar1Change.bind(this);
        this.handleVar2Change = this.handleVar2Change.bind(this);
    }
    
    handleSubmit(event) {
		event.preventDefault();
        const qid = `f${(+new Date()).toString(16)}`
        this.props.addNewQuestion(qid, this.props.authUser, this.state.var1, this.state.var2, Object.keys(this.props.users));
        alert("New question added successfully");
        this.props.history.push('/')
    }
	
	handleVar1Change(event){
		this.setState({var1: event.target.value});
	}
 
	handleVar2Change(event){
		this.setState({var2: event.target.value});
		
	}
 
    
    render(){
      return(
            <div className='maincontainer'>
                <StatusBar />
                <h3 id='formtitle'>Questions creation form</h3>
                <br/>
                <h1 id='mainquestion'>Would You Rather?</h1>
                <form onSubmit={this.handleSubmit} 
                className='loginForm' 
                encType='multipart/form-data'>
                    <input type='text' name='var1' placeholder='First option'  className='loginFormItem' onChange={this.handleVar1Change} />
                    <input type='text' name='var2' placeholder='Second option' className='loginFormItem' onChange={this.handleVar2Change}/>
                    <input type="submit" className='loginFormItem' value="Submit" />
                </form>
                <Link className='regLink' to='/'>Back to questions</Link>
            </div>
           
        )
    }  
}

export default withRouter(connect(state=>({users: state.users, questions: state.questions,  authUser: state.status,}), {addNewQuestion})(NewQuestion))

