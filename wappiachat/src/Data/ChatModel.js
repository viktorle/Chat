import ObservableModel from "./ObservableModel"
class ChatModel extends ObservableModel {
    constructor(){
    super();
        this.user = "";
        this.friend = "";
        this.availableFriends = []
        this.message = [];
     }
    
    setUser(user){
        this.user = user
    }

    RequestForUsers(){
        const url = `https://messenger.wappia.tech/accounts`
        fetch(url).then(this.processResponse).then(data => {
            let persons = data.accounts
            for(let person in persons){
                this.availableUsers.push(persons[person])
            }
        });
        this.notifyObservers();
    }

    getFriends(){
        return this.availableFriends
    }

    setFriend(friend){
        this.friend = friend
    }

    getMessages(){
        return this.message
    }

    sendMessages(message){
        this.message.push(message)
        console.log(this.message)
        this.notifyObservers();
    }
}
const modelInstance = new ChatModel();
export default modelInstance;
