import React, {Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'
import AvaIcon from '../components/avatarka'
import {addNewAnswer, addNewLeftAnswer, addNewRightAnswer} from '../actions/answers'
import {handleVoteLeftBtn, handleVoteRightBtn} from '../actions/sendAnswer'

class Vote extends Component{
    constructor(props){
		super(props);
		this.state={
			idQuestion : '2',
            ixQuestion : '2',
        };
		this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
    }
    
    componentDidMount() {
      const { questions } = this.props
      const qnum1 = questions.findIndex(q => q.id===this.props.match.params.id)
      const qnum = questions[qnum1].id
      this.setState({ixQuestion: qnum1,
                     idQuestion: qnum   });
    }
    
    leftClick(event) {
		event.preventDefault();
        const answkeys = Object.keys(this.props.answers)
        const item = this.props.authUser
        if(answkeys.includes(String(this.state.idQuestion))) {
            if(this.props.answers[String(this.state.idQuestion)].var1.includes(item) || this.props.answers[String(this.state.idQuestion)].var2.includes(item)){
                this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
            }
            else{
                this.props.handleVoteLeftBtn(item, String(this.state.idQuestion), "optionOne");
                this.props.addNewLeftAnswer(String(this.state.idQuestion), item)
                this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
            }
        }
        else{
            this.props.handleVoteLeftBtn(item, String(this.state.idQuestion), "optionOne");
            this.props.addNewAnswer(String(this.state.idQuestion), [item],[]);
            this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
        }    
        
        
        
 	}
    
    rightClick(event) {
		event.preventDefault();
        const answkeys = Object.keys(this.props.answers)
        const item = this.props.authUser
        if(answkeys.includes(String(this.state.idQuestion))) {
            if(this.props.answers[String(this.state.idQuestion)].var1.includes(item) || this.props.answers[String(this.state.idQuestion)].var2.includes(item)){
                this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
            }
            else{
            this.props.handleVoteRightBtn(item, String(this.state.idQuestion), "optionTwo");    
            this.props.addNewRightAnswer(String(this.state.idQuestion), item)
            this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
            }
        }
        else{
            this.props.handleVoteRightBtn(item, String(this.state.idQuestion), "optionTwo");
            this.props.addNewAnswer(String(this.state.idQuestion), [],[item]);
            this.props.history.push(`/questions/${String(this.state.idQuestion)}`);
        }    
 	}
	

    render(){
        const {users, questions } = this.props
        return(
            <div className='maincontainer'>
                <div id='authorBar'>    
                    <div id='avaIcon'><AvaIcon value= {users[Object.keys(users).filter(k => users[k].id === questions[this.state.ixQuestion].author)[0]].ava} /></div>
                    <h3 id='formtitle2'>{questions[this.state.ixQuestion].author} asks:</h3>
                </div>    
                <h1 id='mainquestion'>Would You Rather?</h1>
                <div className='blockButtons'>
                    <button className='varButton' onClick={this.leftClick}>{questions[this.state.ixQuestion].var1}</button>
                    <button className='varButton' onClick={this.rightClick}>{questions[this.state.ixQuestion].var2}</button>
                </div>
                <div id='linkZone'><Link className='regLink' id='linkBack' to='/'>Back to questions</Link></div>
            </div>
           
        )
    }  
}

export default withRouter(connect (state=>({answers: state.answers, users: state.users,  authUser: state.status, questions: state.questions}), 
                {addNewAnswer, addNewLeftAnswer, addNewRightAnswer, handleVoteLeftBtn, handleVoteRightBtn})(Vote))