import React, { Component } from 'react';
import modelinstance from './ChatModel'
import Login from '../Login/Login'
import SelectFriend from '../SelectFriend/SelectFriend';
class HandleUsers extends Component {
    state = { 
        user: "",
        friend: "",
        avaibleUsers: [],
        avaibleFriends: []
     }
    componentDidMount(){
        this.setState({
            avaibleUsers:modelinstance.getUsers(),
            avaibleFriends:modelinstance.getUsers()
        })
    }
    handleSelectedUser(user) {
        alert(user)
        this.setState({
            user
        })
    }

    handleSelectedFriend(friend){
        alert(friend)
        this.setState({
            friend
        })
    }

    render() { 
        let avaibleUsers = this.state.avaibleUsers.map(user => (
            <ul>
                <li onClick={()=> this.handleSelectedUser(user)} key={user}>{user}</li>
            </ul>
        ))
        let avaibleFriends = this.state.avaibleFriends.map(friend => (
            <ul>
                <li onClick={()=> this.handleSelectedFriend(friend)} key={friend}>{friend}</li>
            </ul>
        ))
        return ( 
        <React.Fragment>
            <Login avaibleUsers={avaibleUsers}/>
            <SelectFriend avaibleFriends={avaibleFriends} user={this.state.user}/>
        </React.Fragment>
        );
    }
}
 
export default HandleUsers;