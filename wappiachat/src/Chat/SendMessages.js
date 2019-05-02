import React, { Component } from 'react';
import './SendMessages.css';
class SendMessages extends Component {
    constructor(){
    super()
    this.state = { 
        from: "2",
        to: "1",
        messages: "",
     }
     this.handleText = this.handleText.bind(this);
     this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount(){
        this.setState({
            from: 1/*this.props.users.user.id*/,
            to:2 //this.props.users.friend.id
        })
    }
 
    handleText(event){
        this.setState({
            messages:event.target.value
        })
    }

    handleMessage(){
        console.log(typeof this.state.messages)
        console.log({message:this.state.messages})
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
                <div id="sendMessagesContainer" className="col-sm-12">
                <label className="col-sm-12">
                    <p>Message:</p>
                    <textarea onChange={this.handleText} placeholder="..."/>
                    <br></br>
                <button className="btn btn-primary" onClick={this.handleMessage}>Send Messages</button>
                </label>
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default SendMessages;