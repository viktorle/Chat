import React, { Component } from 'react';
import ReadMessages from './ReadMessages'
import SendMessages from './SendMessages';
import './HandleChat.css';
import TopBar from '../TopBar/TopBar';
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
            <TopBar/>
            <header>
            <p id="welcomeText">Okey {this.state.user.name}! Write something to {this.state.friend.name}</p>
            </header>
            <div id="messagesContainer">
                <div className="d-flex justify-content-center h-100">
                    <div id="messagesBar">
                        <ReadMessages users={this.state}/>
                        <SendMessages users={this.state}/>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default HandleChat;