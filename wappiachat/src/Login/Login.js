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
    componentDidMount(){ //Fetches the accounts from Wappia
        this.setState({loading:true})
        const url = process.env.REACT_APP_WAPPIA_ACCOUNTS_URL;
        fetch(url).then(response => {return response.json()}).then((data) => {
           let availableUsers = data.accounts.map((user) => (
                {name:user.name,id:user.id}
            ))  
        this.setState({
            availableUsers: availableUsers
        })
        })
    }

    handleSelectedUser(user){ //Stores the slected user in the model and removes the selected person from the accounts. (So the person can't chat with it self)
        let availableFriends = this.state.availableUsers.filter(person => person.name !== user.name)
        this.props.model.availableFriends = availableFriends
        this.props.model.user = user
    }

    render() { //Renders the accounts
        let availableUsers = this.state.availableUsers.map((user,index) => (
            <ul key={"users" + index} className="usersList">
                <Link to="SelectFriend">
                <li onClick={()=> this.handleSelectedUser(user)} key={"user" + user.name}>{user.name}</li>
                </Link>
                
            </ul>
            ))
        return ( 
            <React.Fragment>
                <TopBar/>
                <p className="loginText">Who are you?</p> 
                {availableUsers}
            </React.Fragment>
         );
    }
}
 
export default Login;