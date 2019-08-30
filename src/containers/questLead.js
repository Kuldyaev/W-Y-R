import React from 'react'
import {connect} from 'react-redux'

const QuestionLead  = (props) =>{
    const questLine = []
    Object.keys(props.users).map((user)=>{
        questLine.push([user, props.questions.filter(q => q.author===props.users[user].id).length])
        return user
    })
    questLine.sort( (a, b) => b[1] - a[1] ) 
    if(questLine.length > 5){questLine.splice(5,questLine.length-5)}
    
    const showTop = questLine.map((q)=>{
        return(<p key={q[0]}>{props.users[q[0]].username} create {q[1]} questions</p>)
    })
    
    if(props.questions.length > 0){
        return(
            <div className='leader'>
                <p>Top users-creators</p>
                <br/>
                <br/>
                {showTop}
            </div>
        )
    }
    else{
        return(
            <div className='leader'>
                <p>Top users-creators</p>
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


export default connect(mapStateToProps)(QuestionLead); 
