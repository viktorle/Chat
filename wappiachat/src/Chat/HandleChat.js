import React, { Component } from 'react';
import ReadMessages from './ReadMessages'
import SendMessages from './SendMessages';
import './HandleChat.css';
class HandleChat extends Component {
    state = { 
        user: "",
        friend: ""
     }
    componentDidMount(){
        this.setState({
            user:this.props.model.user,
            friend:this.props.model.friend
        })
    }
    update(){
        console.log(this.props.model.getMessages())
        this.setState({
         messages:this.props.model.messages
        })
    }
    render() { 
        return ( 
            <React.Fragment>
            <header>
            <h1>Welcome {this.state.user.name}! Write something to {this.state.friend.name}:</h1>
            </header>
            <div id="messagesContainer">
                <div id="messagesBar">
                <ReadMessages users={this.state}/>
                <SendMessages users={this.state}/>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default HandleChat;