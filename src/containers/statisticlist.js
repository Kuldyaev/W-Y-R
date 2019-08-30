import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'

class StatisticList extends Component {
 
    render(){
        const { answers } = this.props
        const questionsNum = this.props.questions.length
        const usersNum =  Object.keys(this.props.users).length
       
        if (this.props.authUser !== null) {
            const creatQArr = this.props.questions.filter(el => el.author === this.props.authUser);
            
            const currUser =  this.props.authUser 
            const currArr = Object.keys(this.props.answers)
        
            const answQuestion = currArr.reduce(function(a,c){
                const currAnsw1 = answers[c].var1
                const currAnsw2 = answers[c].var2   
                if (currAnsw1.includes(currUser) || currAnsw2.includes(currUser))
                {  return a+1 }
                else {return a}
            } , 0)
                
 
            

            
            
            return (
            <div className='blokStatistic'>
                <div className='informAria' id='statTitle'>Statistic</div>
                <div className='informAria' id='usersNumTitle'>We have {usersNum} users</div>
                <div className='informAria' id='questionsNumTitle'>We have {questionsNum} questions</div>
                <div className='informAria' id='blokStatUser'>
                    <div id='userQuestQ' className='informAria' >You answered on {answQuestion} questions</div>
                    <div id='userAnswQ' className='informAria' >You create {creatQArr.length} questions</div>
                </div> 
                <div id='logPageButton' className='informAria' >
                    <Link className='logPageButton' to='/'>
                        <button>
                             Back to questions 
                        </button>
                    </Link>
                </div>
            </div>    
            );
}    
        
        
        
        
        return( 
            <div className='blokStatistic'>
                <div id='statTitle' className='informAria' >Statistic</div>
                <div id='usersNumTitle' className='informAria' >We have {usersNum} users</div>
                <div id='questionsNumTitle' className='informAria'>We have {questionsNum} questions</div>
                <div id='blokStatUser' className='informAria' ></div>
                <div id='logPageButton' className='informAria' >
                    <Link className='logPageButton'  to='/reg'>
                        <button id='joinBtn'>
                             Join to us 
                        </button>
                    </Link>
                </div>    
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        questions: state.questions,
        authUser: state.status,
        answers: state.answers,
        users: state.users,
    }
}

export default connect(mapStateToProps)(StatisticList);