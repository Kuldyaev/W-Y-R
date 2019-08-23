import React, { Component }  from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/home'
import MenuBar from './components/menu'
import HelpPage from './components/helppage'
import Questions from './components/questions'
import Statistic from './components/statistic'
import LogForm from './containers/loginForm'
import RegForm from './containers/regForm'
import NewQuestion from './containers/newQuestion'
import Vote from './containers/vote'
import './App.css'


class  App  extends Component {
    
    
    
	render(){
		return (
			<div className="App" id='telo'>
				<header>
					<h1>My Application</h1>
				</header>
                <MenuBar />
				<Route exact path='/' render ={() =>(
                    <Home />
				)} />
				<Route path='/logpage'  render={()=>(
					< LogForm />
				)} />
				<Route path='/reg'  render={()=>(
					< RegForm  />
				)} />
                <Route exact path='/help' render ={() =>(
                    <HelpPage />
				)} />
                <Route exact path='/questions' render ={() =>(
                    <Questions />
				)} />
                <Route path='/questions/:id' render ={() =>(
                    <Vote />
				)} />
                <Route exact path='/newquestion' render ={() =>(
                    <NewQuestion />
				)} />
                <Route exact path='/statistic' render ={() =>(
                    <Statistic />
				)} />
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
      store: store  
    };
}

	
export default connect(mapStateToProps)(App);
