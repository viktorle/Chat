import React, { Component } from 'react';
import './ReadMessages.css';
class ReadMessages extends Component {
    //Handles and displays the sended the messages
    constructor(props){
    super(props)
    this.state = { 
        from: this.props.users.user.id,
        to: this.props.users.friend.id,
        sendedMessages: []
     }
     this.updateMessages = this.updateMessages.bind(this);
    }
    componentDidMount(){
        this.updateMessages()
        //this.intervall = setInterval( () => this.updateMessages(), 5000) 
        //Not the best solution for an autoupdate function but the ide is to set a time intervall
        //which calls the update function. And after that will the 
    }

    componentWillMount(){
        //clearInterval(this.interval);
    }

    updateMessages(){//Updates the messages when the "update"-button in pressed
        const url = `https://messenger.wappia.tech/conversations/from/` + this.state.from + `/to/` + this.state.to
        fetch(url).then(response => {return response.json()}).then((data) => {
           let sendedMessages = data.messages.map((result) => (
                {messages:result}
            ))  
        this.setState({
            sendedMessages: sendedMessages
        })
        })
    }
   
    render() { //Renders all the messages
        let messages = this.state.sendedMessages.map((result,index) => (   
            <ul className="sentMessage" style={result.messages.from === "1" ? {textAlign:"left"} : {textAlign:"center"} } key={"messagesContainer" + index}>
                <li key={"from" + index}><b>From:</b> {result.messages.from}</li>
                <li key={"messages" + index}><b>Message:</b> {result.messages.message}</li>
            </ul>
        ))
        return ( 
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.updateMessages}>Update <i className="fas fa-sync"></i></button>
                <div className="container h-100" id="readMessagesBar">
                    <div id="readMessagesContainer">{messages}</div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ReadMessages;