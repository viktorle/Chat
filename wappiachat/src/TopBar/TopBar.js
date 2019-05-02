import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
class TopBar extends Component {
    render() { 
        return (
            <nav id="navBar" className="navbar">
                <Link to="/">
                <p className="col-sm-4">Start over</p>
                </Link>
                <p className="col-sm-4"id="appTitle">The Chat App</p>
            </nav>
          );
    }
}
 //58c1e0
export default TopBar;