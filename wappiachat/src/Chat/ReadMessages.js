import React, { Component } from 'react';
import './ReadMessages.css';
class ReadMessages extends Component {
    constructor(props){
    super(props)
    this.state = { 
        sendedMessages: []
     }
    }

    updateMessages(){
        const url = `https://messenger.wappia.tech/conversations/from/1/to/2`
        fetch(url).then(response => {return response.json()}).then((data) => {
           console.log(data.messages)
           let sendedMessages = data.messages.map((result) => (
                {messages:result}
            ))  
            console.log(sendedMessages)
        this.setState({
            sendedMessages: sendedMessages
        })
        })
    }
   
    render() { 
        let messages = this.state.sendedMessages.map((message,index) => (
            <ul className="sentMessage" style={message.messages.from === "1" ? {textAlign:"left"} : {textAlign:"center"} } key={"messagesContainer" + index}>
                <li key={"from" + index}><b>From:</b> {message.messages.from}</li>
                <li key={"messages" + index}><b>Message:</b> {message.messages.message}</li>
            </ul>
        ))
        return ( 
            <React.Fragment>
                <button className="btn btn-primary" onClick={()=>this.updateMessages()}>Update <i className="fas fa-sync"></i></button>
                <div className="container h-100" id="readMessagesBar">
                    <div id="readMessagesContainer">{messages}</div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ReadMessages;