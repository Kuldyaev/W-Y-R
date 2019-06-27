import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserList extends Component {
    
    showList(){
        return Object.keys(this.props.users).map((key)=> {
            return (<li key={this.props.users[key].id}>{this.props.users[key].username}</li>)});
    };

    render(){
        return( 
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

function mapStateToProps(state) {
    return{
        users: state.users,
        authUser: state.status.authUser
    }
}

export default connect(mapStateToProps)(UserList);