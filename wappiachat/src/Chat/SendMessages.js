import React, { Component } from 'react';
import './SendMessages.css';
class SendMessages extends Component {
    //Handles the user input message and then sends it.
    constructor(props){
    super(props)
    this.state = { 
        from: this.props.users.user.id,
        to: this.props.users.friend.id,
        messages: "",
     }
     this.handleText = this.handleText.bind(this);
     this.handleMessage = this.handleMessage.bind(this);
    }
 
    handleText(event){ //Stores users entered message
        this.setState({
            messages:event.target.value
        })
    }

    handleMessage(){ //Sends the message
        const url = `https://messenger.wappia.tech/conversations/from/`+ this.state.from + `/to/` + this.state.to
        fetch(url,{
            method: 'post',
            body: JSON.stringify({message:this.state.messages}),
            headers:{'Content-Type': 'application/json'}
        }).then(response => {return response.json()}).then((data) => {
            console.log(data)
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div id="sendMessagesContainer">
                    <label>
                        <div className="container h-100">
                            <p>Message:</p>
                            <textarea onChange={this.handleText} className="form-control" placeholder="..."/>
                            <br></br>
                            <button className="btn btn-info" onClick={this.handleMessage}>Send Messages <i className="far fa-paper-plane"></i></button>
                        </div>
                    </label>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SendMessages;