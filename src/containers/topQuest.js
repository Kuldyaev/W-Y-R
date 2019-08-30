import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const TopQuestions  = (props) =>{
    if(Object.keys(props.answers).length > 0){
        const answLine = []
        Object.keys(props.answers).map((ans)=>{
            answLine.push([ans, props.answers[ans].var1.length + props.answers[ans].var2.length])
            return ans
        })
        answLine.sort( (a, b) => b[1] - a[1] ) 
        if( answLine.length > 3){answLine.splice(3, answLine.length-3)}
        
        const showTop = answLine.map((q)=>{
            return(
                <Link className='voteicon' to={`/questions/${q[0]}`} key={q[0]}>
                    <li key={q.id} className='showQuestionItem'>
                        <div className='blokQuestion'>Would you rather?</div>
                        <div className='blokVariants'>
                            <button className='btnVariant'>{props.questions[props.questions.findIndex(s => s.id===q[0])].var1}</button>
                            <button className='btnVariant'>{props.questions[props.questions.findIndex(s => s.id===q[0])].var2}</button>
                        </div>
                    </li>
                </Link>
            )
        })
        
        return(
            <div className='leader'>
                <p>Top active questions</p>
                <br/>
                {showTop}
            </div>
        )
    }
    else{
        return(
            <div className='leader'>
                <p>Top active questions</p>
                <br/>
                <p>We don't have enough data</p>
            </div>
        )    
    }
}

function mapStateToProps (store){
    return{
      questions: store.questions,
      answers: store.answers,
      users: store.users,
    };
}


export default connect(mapStateToProps)(TopQuestions); 