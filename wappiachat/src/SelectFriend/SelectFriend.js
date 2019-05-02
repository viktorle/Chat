import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
class SelectFriend extends Component {
    state = { 
        avaibleFriends: this.props.model.getFriends()
     }

    handleSelectedFriend(friend){
        this.props.model.friend = friend;
    }

    render() { 
        let avaibleFriends = this.state.avaibleFriends.map((friend,index) => (
            <ul key={"friends" + index}>
                <Link to="Chat">
                    <li onClick={()=> this.handleSelectedFriend(friend)} key={"friend" + friend.name}>{friend.name}</li>
                </Link>
            </ul>
        ))
        return ( 
        <React.Fragment> 
            <TopBar/>
            <p>Hello {this.props.model.user.name}! Select your friend</p>
                {avaibleFriends}
        </React.Fragment> );
    }
}
 
export default SelectFriend;