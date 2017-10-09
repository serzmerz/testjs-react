import React, {Component} from 'react';
import MainLayout from "../MainLayout/index";

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo center">Order Manager</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col s12 m4 l3">
                        <MainLayout history={this.props.history}/>
                    </div>

                    <div className="col s12 m8 l9">
                        {this.props.children}

                    </div>
                </div>
            </div>
        );
    }
}


export default NavBar;