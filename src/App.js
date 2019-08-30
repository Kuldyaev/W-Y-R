import React, { Component }  from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/home'
import MenuBar from './components/menu'
import HelpPage from './components/helppage'
import Questions from './components/questions'
import Statistic from './components/statistic'
import Info from './components/info'
import NotFound from './components/notfound'
import LogForm from './containers/loginForm'
import RegForm from './containers/regForm'
import NewQuestion from './containers/newQuestion'
import Vote from './containers/vote'
import LoadingBar from 'react-redux-loading-bar';
import './App.css'

import {handleInitialLoad} from './actions/initialLoad'


class  App  extends Component {
    componentDidMount() {
        this.props.handleInitialLoad()
    }
    
	render(){
        const { questions, answers } = this.props
		return (
			<div className="App" id='telo'>
				<header>
					<h1>My Application</h1>
				</header>
                <MenuBar />
                <LoadingBar />
                <Switch>
                    <Route exact path='/' component = {Questions}/>
                    <Route exact path='/logpage'  render = {()=>(
                        this.props.authUser === null 
                            ? (<LogForm />)
                            : (<Redirect to='/'/>)     
                     )
                    }/>
                    <Route exact path='/reg'  render = {()=>(
                       this.props.authUser !== null 
                            ? (<Redirect to='/'/>)
                            : (<RegForm/>)
                     )   
                    }/>
                    <Route exact path='/leaderboard' render = {()=>(
                        this.props.authUser !== null 
                            ? (<Home />)
                            : (<Redirect to={{pathname: "/logpage", state: { referrer: this.props.location }}}/>) 
                     )
                    }/>
                    <Route exact path='/help' component = {HelpPage }/>
                    <Route path='/questions/:id' render = {()=>(
                        this.props.authUser !== null 
                            ? ( questions.findIndex(q => q.id===this.props.location.pathname.substring(11)) < 0 
                                 ? (<NotFound />)
                                 : (Object.keys(answers).length > 0
                                       ? ( Object.keys(answers).includes(this.props.location.pathname.substring(11))
                                               ? ( (answers[String(this.props.location.pathname.substring(11))].var1.includes(this.props.authUser) || answers[this.props.location.pathname.substring(11)].var2.includes(this.props.authUser))
                                                    ? (<Redirect to={`/answers/${this.props.location.pathname.substring(11)}`}/>)
                                                    : (<Vote />)
                                               )
                                               : (<Vote />)
                                       )
                                       : (<Vote />)
                                    )
                              )
                            : (<Redirect to={{pathname: "/logpage", state: { referrer: this.props.location }}}/>) 
                       )  
                    } />
                    <Route path='/answers/:id' render = {()=>(
                        this.props.authUser !== null 
                            ? ( questions.findIndex(q => q.id===this.props.location.pathname.substring(9)) < 0
                                 ? (<NotFound />)
                                 : (<Info />)
                            )
                            : (<Redirect to={{pathname: "/logpage", state: { referrer: this.props.location }}}/>) 
                       )  
                    } />
                    <Route exact path='/add' render ={()=>(
                        this.props.authUser !== null 
                            ? (<NewQuestion/>)
                            : (<Redirect to={{pathname: "/logpage", state: { referrer: this.props.location }}}/>) 
                     )
                    }/>
                    <Route exact path='/statistic' component ={Statistic}/>
                    <Route component={NotFound} />
                </Switch>
				<footer>
					<p id='creator'>Created by&nbsp;    
                        <a className='authorPage' href='http://www.kuldyaev.ru'>
                          Viacheslav Kuldyaev</a>
                    </p>
				</footer>
			</div>
		);}
}

function mapStateToProps (store){
    return{
      store: store,
      authUser: store.status, 
      questions: store.questions,
      answers: store.answers
    };
}

	
export default withRouter(connect(mapStateToProps, {handleInitialLoad})(App));
