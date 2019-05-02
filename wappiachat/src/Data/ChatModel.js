import { Component } from 'react';
class ChatModel extends Component {
    //Stores the fetched data
    constructor(){
    super();
        this.user = "";
        this.friend = "";
        this.availableFriends = []
     }
}
const modelInstance = new ChatModel();
export default modelInstance;
