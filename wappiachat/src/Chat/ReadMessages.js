import React, { Component } from 'react';
import './ReadMessages.css';
class ReadMessages extends Component {
    //Handles and displays the sended the messages
    constructor(props){
    super(props)
    this.state = { 
        from: this.props.users.user.id,
        to: this.props.users.friend.id,
        sentMessages: [],
        receivedMessages: []
     }
     this.updateMessages = this.updateMessages.bind(this);
    }
    componentDidMount(){
        this.updateMessages()
        //this.intervall = setInterval( () => this.updateMessages(), 10000) 
        //Not the best solution for an autoupdate function but the ide is to set a time intervall
        //which calls the update function. And after that will the 
    }

    componentWillMount(){
       // clearInterval(this.interval);
    }

    updateMessages(){//Updates the messages when the "update"-button in pressed
        const url = process.env.REACT_APP_WAPPIA_CONVERSATION_URL + this.state.from + `/to/` + this.state.to
        fetch(url).then(response => {return response.json()}).then((data) => { //Handels the messages sent by the user
           let sentMessages = data.messages.map((result) => (
                {messages:result}
            ))  
        this.setState({
            sentMessages: sentMessages
        })
        })
        const urlReceived = process.env.REACT_APP_WAPPIA_CONVERSATION_URL + this.state.to + `/to/` + this.state.from
        fetch(urlReceived).then(response => {return response.json()}).then((data) => { //Handels the messages sent by the friend
           let receivedMessages = data.messages.map((result) => (
                {messages:result}
            ))  
        this.setState({
            receivedMessages: receivedMessages
        })
        })
    }
   
    render() { //Renders all the messages
        let sentMessages = this.state.sentMessages.map((result,index) => (   //Returns all the messages sent by the person
            <ul className="sentMessage" key={"messagesContainer" + index}>
                <li key={"from" + index}><b>From:</b> {result.messages.from}</li>
                <li key={"messages" + index}><b>Message:</b> {result.messages.message}</li>
            </ul>
        ))
        let receivedMessages = this.state.receivedMessages.map((result,index) => (   //Returns all the messages sended by the friend
            <ul className="sentMessage"  key={"messagesContainer" + index}>
                <li key={"to" + index}><b>From:</b> {result.messages.from}</li>
                <li key={"recivedMessages" + index}><b>Message:</b> {result.messages.message}</li>
            </ul>
        ))
        return ( 
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.updateMessages}>Update <i className="fas fa-sync"></i></button>
                <div className="container h-100" id="readMessagesContainer">
                    <div className="col-sm-6">
                        <p><u>Person {this.state.to}</u></p>
                        <div id="received" className="readMessagesBar">{receivedMessages}</div>
                    </div>
                    <div className="col-sm-6">
                        <p><u>Person {this.state.from}</u></p>
                        <div id="sent" className="readMessagesBar">{sentMessages}</div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ReadMessages;