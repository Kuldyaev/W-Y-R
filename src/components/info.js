import React, {Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'
import AvaIcon from '../components/avatarka'


class Info extends Component{
    constructor(props){
		super(props);
		this.state={
			idQuestion : '6',
            ixQuestion : '0',
        };
    }
    
    componentDidMount() {
      const { questions } = this.props
      const qnum1 = questions.findIndex(q => q.id===this.props.match.params.id)
      const qnum = questions[qnum1].id
      this.setState({ixQuestion: qnum1,
                     idQuestion: qnum   });
    }
    
    render(){
        const {users, questions, answers, authUser } = this.props
        const a1 = answers[String(this.props.match.params.id)].var1.length
        const a2 = answers[String(this.props.match.params.id)].var2.length

        const style1 = ( answers[this.props.match.params.id].var1.includes(authUser)
                            ? {backgroundColor: 'green'}
                            : {backgroundColor: '#E4E4E7'}
                        )
        const style2 = ( answers[this.props.match.params.id].var2.includes(authUser)
                            ? {backgroundColor: 'green'}
                            : {backgroundColor: '#E4E4E7'}
                        )               
                        
      
        
        return(
            <div className='maincontainer'>
                <div id='authorBar'>    
                    <div id='avaIcon'><AvaIcon value= {users[Object.keys(users).filter(k => users[k].id === questions[this.state.ixQuestion].author)[0]].ava} /></div>
                    <h3 id='formtitle2'>{questions[this.state.ixQuestion].author} asks:</h3>
                </div>    
                <h1 id='mainquestion'>Would You Rather?</h1>
                <div className='blockButtons'>
                    <div className='varButton' style = {style1}>
                        <p className='varButtonText1' >option 1</p>
                        <p className='varButtonText2'>{questions[this.state.ixQuestion].var1}</p>
                        <p className='varButtonText1'>was chosen {a1} users</p>
                        <p className='varButtonText2'>{Math.round(a1/(a1+a2)*100)}%</p>
                        
                    </div>
                    <div className='varButton' style = {style2}>
                        <p className='varButtonText1' >option 2</p>
                        <p className='varButtonText2'>{questions[this.state.ixQuestion].var2}</p>
                        <p className='varButtonText1'>was chosen {a2} users</p>
                        <p className='varButtonText2' >{100 - Math.round(a1/(a1+a2)*100)}%</p>
                    </div>
                </div>
                <div id='linkZone'><Link className='regLink' id='linkBack' to='/'>Back to questions</Link></div>
            </div>
           
        )
    }  
}

export default withRouter(connect (state=>({answers: state.answers, users: state.users,  authUser: state.status, questions: state.questions}))(Info))