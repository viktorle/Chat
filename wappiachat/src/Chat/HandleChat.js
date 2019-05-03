import React, { Component } from 'react';
import ReadMessages from './ReadMessages'
import SendMessages from './SendMessages';
import './HandleChat.css';
import TopBar from '../TopBar/TopBar';
class HandleChat extends Component {
    constructor(props){
    super(props)
    this.state = { 
        user:this.props.model.user,
        friend:this.props.model.friend
     }
    }
       
    render() { //Renders the ReadMessages view and the SendMessages view
        return ( 
            <React.Fragment>
            <TopBar/>
            <header>
                <p id="welcomeText">Okey {this.state.user.name}({this.state.user.id})! Write something to {this.state.friend.name}({this.state.friend.id})</p>
            </header>
            <div id="messagesContainer">
                <div className="d-flex justify-content-center h-100">
                    <div id="messagesBar">
                        <ReadMessages users={this.state}/>
                        <SendMessages users={this.state}/>
                    </div>
                </div>
            </div>
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <br></br>
                    <span>Made By Viktor Lemón</span>
                </div>
            </footer>
            </React.Fragment>
         );
    }
}
 
export default HandleChat;