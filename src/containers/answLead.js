import React from 'react'
import {connect} from 'react-redux'

const AnswerLead  = (props) =>{
    if(Object.keys(props.answers).length > 0){
        const answLine = []
        Object.keys(props.users).map((user)=>{
            answLine.push([user, Object.keys(props.answers).filter(a => (props.answers[a].var1.includes(user) || props.answers[a].var2.includes(user))).length])
            return user
        })
        answLine.sort( (a, b) => b[1] - a[1] ) 
        if( answLine.length > 5){answLine.splice(5, answLine.length-5)}
        
        const showTop = answLine.map((q)=>{
            return(<p key={q[0]}>{props.users[q[0]].username} answered on {q[1]} questions</p>)
        })
        
        return(
            <div className='leader'>
                <p>Top active users</p>
                <br/>
                <br/>
                {showTop}
            </div>
        )
    }
    else{
        return(
            <div className='leader'>
                <p>Top active users</p>
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


export default connect(mapStateToProps)(AnswerLead); 