import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'

class QuestionList extends Component {
    constructor(props){
		super(props);
		this.state={
			btn : '4',
            btn1: '#E4E4E7',
            btn2: '#E4E4E7',
            btn3: '#E4E4E7',
            btn4: 'white',
            quest: [],
            page: 'full',
        };
        this.firstClick = this.firstClick.bind(this);
        this.secondClick = this.secondClick.bind(this);
        this.therdClick = this.therdClick.bind(this);
        this.forthClick = this.forthClick.bind(this);
    }
    
    componentDidMount() {
      const { questions } = this.props
      this.setState({quest: questions});
    }
    
    firstClick(event) {
        const { questions } = this.props
        const quest1 = questions.filter(el => el.author === this.props.authUser.authUser);
		if (quest1.length > 0){       
            this.setState({btn: '1',
                            btn1: 'white',
                            btn2: '#E4E4E7',
                            btn3: '#E4E4E7',
                            btn4: '#E4E4E7',
                            quest: quest1,
                            page: 'full',
             });
        }
        else{
           this.setState({btn: '1',
                            btn1: 'white',
                            btn2: '#E4E4E7',
                            btn3: '#E4E4E7',
                            btn4: '#E4E4E7',
                            quest: quest1,
                            page: 'empty', 
            });
        }
 	}
    
    secondClick(event) {
        const { questions, answers } = this.props
        if (Object.keys(answers).length > 0) {
        const item = this.props.authUser.authUser
        const x = Object.keys(this.props.answers)
        const xx = x.filter(el => (answers[el].var1.includes(item) || answers[el].var2.includes(item)));
        const quest2 = questions.filter(q => xx.includes(q.id))
        
        this.setState({btn: '2',
                        btn1: '#E4E4E7',
                        btn2: 'white',
                        btn3: '#E4E4E7',
                        btn4: '#E4E4E7',
                        quest: quest2,
                        page: 'full',
            });
        
        }
        else{
            this.setState({btn: '2',
                        btn1: '#E4E4E7',
                        btn2: 'white',
                        btn3: '#E4E4E7',
                        btn4: '#E4E4E7',
                        quest: questions,
                        page: 'empty',
            });
        }
 	}
    
    therdClick(event) {
        const { questions, answers } = this.props
        if (Object.keys(answers).length > 0) {
            const item = this.props.authUser.authUser
            const x = Object.keys(this.props.answers)
            const xx = x.filter(el => (answers[el].var1.includes(item) || answers[el].var2.includes(item)));
            const quest3 = questions.filter(q => (!(xx.includes(q.id))))
            if (xx.length === questions.length){
                this.setState({btn: '3',
                            btn1: '#E4E4E7',
                            btn2: '#E4E4E7',
                            btn3: 'white',
                            btn4: '#E4E4E7',
                            quest: quest3,
                            page: 'empty',
                });
            }
            else{
                this.setState({btn: '3',
                            btn1: '#E4E4E7',
                            btn2: '#E4E4E7',
                            btn3: 'white',
                            btn4: '#E4E4E7',
                            quest: quest3,
                            page: 'full',
                });
                
            }        
        }    
        else{       
            this.setState({btn: '3',
                        btn1: '#E4E4E7',
                        btn2: '#E4E4E7',
                        btn3: 'white',
                        btn4: '#E4E4E7',
                        quest: questions,
                        page: 'full',
                        
            });
        }
 	}  
    
    forthClick(event) {
        const { questions } = this.props
		this.setState({btn: '3',
                        btn1: '#E4E4E7',
                        btn2: '#E4E4E7',
                        btn3: '#E4E4E7',
                        btn4: 'white',
                        quest: questions,
                        page: 'full',
                        
        });
 	}  
    
 
    showList(){
        if(this.state.page === 'full') { 
        return this.state.quest.map((q)=>{
            return(
                <Link className='voteicon' to={`/questions/${q.id}`} key={q.id}>
                    <li key={q.id} className='showQuestionItem'>
                        <div className='blokQuestion'>Would you rather?</div>
                        <div className='blokVariants'>
                            <button className='btnVariant'>{q.var1}</button>
                            <button className='btnVariant'>{q.var2}</button>
                        </div>
                    </li>
                </Link>
            )
        })
        }
        else{
            return(
                <p> Страница пуста. Нет данных для отображения.</p>
            )    
        }
    }
    
    render(){
        const { btn1, btn2, btn3, btn4 } = this.state
//        console.log(this.props.questions);
//        console.log(this.props.authUser);
 //       console.log(Object.keys(this.props.answers).length);

        if (this.props.authUser.authSuccess === true) {
            return (
            <div className='questions'>
                <div className='btnsBoard'>
                    <button className='questBtns' onClick={this.firstClick}
                    style={{ background: btn1}}>
                        My questions 
                    </button>
                    <button className='questBtns' onClick={this.secondClick}
                    style={{ background: btn2}}>
                        Answered questions 
                    </button>
                    <button className='questBtns' onClick={this.therdClick}
                    style={{ background: btn3}}>
                        Unanswered questions
                    </button>
                    <button className='questBtns' onClick={this.forthClick}
                    style={{ background: btn4}}>
                        All questions 
                    </button>
                    
                </div>
                <div className='showQuestionsBoard2'>
                    <ul className='showQuestionsBoard'>
                        {this.showList()}
                    </ul>
                    <div id='logPageButton' className='informAria' >
                        <Link className='logPageButton' to='/newquestion'>
                            <button>
                                Add question 
                            </button>
                        </Link>
                    </div>    
                </div>
            </div>    
            );
}    
        
        
        
        
        return( 
                 <ul className='showQuestionsBoard'>
                    {this.showList()}
                </ul>
        );
    }
}

function mapStateToProps(state) {
    return{
        questions: state.questions,
        authUser: state.status,
        answers: state.answers,
    }
}

export default connect(mapStateToProps)(QuestionList);