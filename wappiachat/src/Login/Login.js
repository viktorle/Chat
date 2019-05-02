import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import TopBar from '../TopBar/TopBar';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            availableUsers: []
        }
    }
    componentDidMount(){
        const url = `https://messenger.wappia.tech/accounts`
        fetch(url).then(response => {return response.json()}).then((data) => {
           console.log(data)
           let availableUsers = data.accounts.map((user) => (
                {name:user.name,id:user.id}
            ))  
        this.setState({
            availableUsers: availableUsers
        })
        })
    }

    handleSelectedUser(user){
        let availableFriends = this.state.availableUsers.filter(person => person.name !== user.name)
        this.props.model.availableFriends = availableFriends
        this.props.model.user = user
    }

    render() { 
        let availableUsers = this.state.availableUsers.map((user,index) => (
            <ul key={"users" + index}>
                <Link to="SelectFriend">
                <li onClick={()=> this.handleSelectedUser(user)} key={"user" + user.name}>{user.name}</li>
                </Link>
                
            </ul>
            ))
        return ( 
            <React.Fragment>
            <TopBar/>
            <p>Who are you?</p> 
            {availableUsers}
            </React.Fragment>
         );
    }
}
 
export default Login;