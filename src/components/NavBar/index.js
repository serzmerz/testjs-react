import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo center">Order Manager</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default NavBar;