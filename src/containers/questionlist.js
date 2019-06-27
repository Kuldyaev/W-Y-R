import React, {Component} from 'react'
import {connect} from 'react-redux'

class QuestionList extends Component {
    
    showList(){
        return this.props.questions.map((q)=>{
            return(
                <li key={q.id} className='showQuestionItem'>
                    <div className='blokQuestion'>{q.question}</div>
                    <div className='blokVariants'>
                        <button className='btnVariant'>{q.var1}</button>
                        <button className='btnVariant'>{q.var2}</button>
                    </div>
                </li>
            )
        })
    }
    
    render(){
        console.log(this.props.questions)
        return( 
            <ul className='showQuestionsBoard'>
                {this.showList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return{
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionList);