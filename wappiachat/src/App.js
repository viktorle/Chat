import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import modelInstance from './Data/ChatModel'
import Login from './Login/Login';
import SelectFriend from './SelectFriend/SelectFriend';
import HandleChat from './Chat/HandleChat';

class App extends Component{
  render(){
  return (
    <div className="App">
     {/* <header className="App-header">
      
      </header>*/}
      <Route 
        exact path = "/"
        render = {() => <Login model = {modelInstance}/>}
      />
      <Route 
        path = "/SelectFriend"
        render ={() => <SelectFriend model = {modelInstance}/>}
      />
      <Route 
        path = "/Chat"
        render ={() => <HandleChat model = {modelInstance}/>}
      />
    </div>
  );
  }
}

export default App;
