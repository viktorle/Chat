import React, { Component } from 'react';
import Login from '../Login/Login';
class Fetch extends Component {
    constructor(){
        super()
        this.state = {
            availableUsers: []
        }
    }

    componentDidMount(){
        const url = `https://messenger.wappia.tech/accounts`
        fetch(url).then(response => {return response.json()}).then((data) => {
           console.log(data)
           let availableUsers = data.accounts.map((user) => (
                {name:user.name,id:user.id}
            ))

           /* let availableUsers = data.accounts.map((user,index) => (
                <ul key={user.name+index}>
                    <li onClick={()=> this.handleSelectedUser(user)} key={user.name}>{user.name}</li>
                </ul>
            ))*/
           
           
        this.setState({
            availableUsers: availableUsers
        })
        this.props.model.availableUsers = availableUsers
        console.log(this.state)
        })
    }
    


    render() { 
        return ( 
            <React.Fragment>
                {this.state.availableUsers? 
                <Login model = {this.props.model} users={this.state.availableUsers}/>
                : {}}
            </React.Fragment>
            )
    }
}
 
export default Fetch;