import React from 'react'
import {connect} from 'react-redux'

const AnswerLead  = (props) =>{
    if(Object.keys(props.answers).length > 0){
        const answLine = []
        Object.keys(props.users).map((user)=>{
            answLine.push([user, 
                            Object.keys(props.answers).filter(a => (props.answers[a].var1.includes(user) || props.answers[a].var2.includes(user))).length,
                            props.questions.filter(q => q.author===props.users[user].id).length
                            ])
            return user
        })
        answLine.sort( (a, b) => (b[1]+b[2]) - (a[1]+a[2]) ) 
        if( answLine.length > 10){answLine.splice(10, answLine.length-10)}
        
        const showTop = answLine.map((q)=>{
            return(<p key={q[0]}>{props.users[q[0]].username}</p>)
        })
        
        return(
            <div className='leader'>
                <p>active users list</p>
                <br/>
                <br/>
                {showTop}
            </div>
        )
    }
    else{
        return(
            <div className='leader'>
                <p>active users list</p>
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