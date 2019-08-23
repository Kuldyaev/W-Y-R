import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import '../components/home.css'
import {addNewUser} from '../actions/users'

const readFileAsDataURL = (file) =>
  new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = (event) => {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })

const resizeImage = (imageURL, canvas, maxHeight) =>
  new Promise(resolve => {
    const image = new Image()

    image.onload = () => {
      const context = canvas.getContext('2d')

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height
        image.height = maxHeight
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = image.width
      canvas.height = image.height

      context.drawImage(image, 0, 0, image.width, image.height)

      resolve(canvas.toDataURL('image/jpeg'))
    }

    image.src = imageURL
  })




class RegForm extends Component{
    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string,
        maxHeight: PropTypes.number
    }
    
    constructor(props){
		super(props);
		this.state={
			username : '',
			pass : '',
            ava : '',
            value: '',
        };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    
    handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file).then(originalURL => {
        resizeImage(originalURL, this.canvas, this.props.maxHeight).then(url => {
          this.setState({ value: url })
        })
      })
    } else {
      this.setState({ value: '' })
    }
    }

    handleFormReset = () => {
      this.setState({ value: '' })
    }

   componentDidMount() {
      this.canvas = document.createElement('canvas')
      this.fileInput.form.addEventListener('reset', this.handleFormReset)
    }

    componentWillUnmount() {
       this.fileInput.form.removeEventListener('reset', this.handleFormReset)
    }
    
    handleSubmit(event) {
		event.preventDefault();
        const newUser = this.state.username
        const newPass = this.state.pass
        const newAva = this.state.value
        const conditions = true;
        const row = Object.keys(this.props.users).some(function(key){return key === newUser});
        if (row) {alert("User with this name allredy exist. Try again!")}
        else{
            if(conditions){this.props.addNewUser(newUser, newPass, newAva); 
                            alert("You successfully created new user");
                            this.props.history.push('/logpage');}
            else {alert("Username or password doesn't match requirement. Try again!")}}
	}
	
	handleUsernameChange(event){
		this.setState({username: event.target.value});
	}
 
	handlePassChange(event){
		this.setState({pass: event.target.value});
	}
    
  
    render(){
        const { value } = this.state
        const style = {
            position: 'relative'
        }

        if (value) {
            style.backgroundImage = `url("${value}")`
            style.backgroundRepeat = 'no-repeat'
            style.backgroundPosition = 'center'
            style.backgroundSize = 'cover'
        }

        if (this.props.authUser.authSuccess === true) {
            return (
                <Redirect to='/' />
            );
        }
        
        return(
            <div className='maincontainer'>
                <h3 id='formtitle'>Registration form</h3>
                <form onSubmit={this.handleSubmit} 
                className='loginForm' 
                encType='multipart/form-data'>
                    <div className='create-contact-avatar-input' style={style}>
                        <input type="hidden" name='avatarURL' value={value} />
                        <input
                            ref={node => this.fileInput = node}
                            type="file"
                            onChange={this.handleFileChange}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0
                            }}
                        />
                    </div>    
                    <input type='text' name='username' placeholder='Username'  className='loginFormItem' onChange={this.handleUsernameChange} />
                    <input type='text' name='password' placeholder='Password' className='loginFormItem' onChange={this.handlePassChange}/>
                    <input type="submit" className='loginFormItem' value="Log on" />
                </form>
                <Link className='regLink' to='/logpage'>Log in</Link>
            </div>
        )
    }  
}

export default withRouter(connect(state=>({users: state.users,  authUser: state.status,}), {addNewUser})(RegForm))

