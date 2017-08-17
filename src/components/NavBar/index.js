import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo center">Order Manager</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        );
    }
}


export default NavBar;