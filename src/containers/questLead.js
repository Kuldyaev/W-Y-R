import React from 'react'
import {connect} from 'react-redux'
import AvaIcon from '../components/avatarka'

const QuestionLead  = (props) =>{
    const questLine = []
    Object.keys(props.users).map((user)=>{
        questLine.push([user, 
                        props.questions.filter(q => q.author===props.users[user].id).length, 
                        Object.keys(props.answers).length > 0
                            ? Object.keys(props.answers).filter(a => (props.answers[a].var1.includes(user) || props.answers[a].var2.includes(user))).length  
                            : 0
                        
        ])
        return user
    })
    questLine.sort( (a, b) => (b[1]+b[2]) - (a[1]+a[2]) ) 
    if(questLine.length > 3){questLine.splice(3,questLine.length-3)}
    
    
    const Style = {
        left: '40px'
    }
     
        return(
            <div className='leader2'>
                <div className='leaderitem'>
                    <div className='leaderSpace' id ='leaderSpace2' ></div>
                    <div className='leaderInfo'>
                        <AvaIcon value= {props.users[Object.keys(props.users).filter(k => props.users[k].id === questLine[1][0])].ava} style ={Style} />
                        <p className='leaderName'>{props.users[questLine[1][0]].username}</p>
                        <p> create {questLine[1][1]} questions</p>
                        <p>and answered {questLine[1][2]} questions</p>
                    </div>
                    <div className='leaderPlace' id ='leaderPlace2' ><h3>2</h3></div>
                </div>
                <div className='leaderitem'>
                    <div className='leaderSpace' id ='leaderSpace1'></div>
                    <div className='leaderInfo'>
                        <AvaIcon value= {props.users[Object.keys(props.users).filter(k => props.users[k].id === questLine[0][0])].ava} />
                        <p className='leaderName'>{props.users[questLine[0][0]].username}</p>
                        <p> create {questLine[0][1]} questions</p>
                        <p>and answered {questLine[0][2]} questions</p>
                    </div>
                    <div className='leaderPlace' id ='leaderPlace1'><h3>1</h3></div>
                </div>
                <div className='leaderitem'>
                    <div className='leaderSpace' id ='leaderSpace3'></div>
                    <div className='leaderInfo'>
                        <AvaIcon value= {props.users[Object.keys(props.users).filter(k => props.users[k].id === questLine[2][0])].ava} />
                        <p className='leaderName'>{props.users[questLine[2][0]].username}</p>
                        <p> create {questLine[2][1]} questions</p>
                        <p>and answered {questLine[2][2]} questions</p>
                    </div>
                    <div className='leaderPlace' id ='leaderPlace3'><h3>3</h3></div>
                </div>
            </div>
        )
   
}

function mapStateToProps (store){
    return{
      questions: store.questions,
      answers: store.answers,
      users: store.users,
    };
}


export default connect(mapStateToProps)(QuestionLead); 
