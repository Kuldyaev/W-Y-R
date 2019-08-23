import React,{  Component } from 'react'

class AvaIcon extends Component{
    render(){
        const { value } = this.props
    
        const style = {
            position: 'relative'
        }
        if (value) {
            style.backgroundImage = `url("${value}")`
            style.backgroundRepeat = 'no-repeat'
            style.backgroundPosition = 'center'
            style.backgroundSize = 'cover'
        }
        
      return(
        <div className='user-avatar' style={style}>
        </div>
        )
}}



export default AvaIcon;