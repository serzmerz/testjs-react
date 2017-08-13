import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeLink: true,
            activeClass: this.props.history.location.pathname,
            linkList: [
                {
                    title: "Home",
                    href: "/"
                },
                {
                    title: "Orders",
                    href: "/orders"
                 },
                {
                    title: "New order",
                    href: "/new-order"
                }
            ]
        }
    }

    changeActive = (e) => {
        this.setState({activeClass: e.target.getAttribute('href')});
    };

    render() {
        let res = this.state.linkList.map((item, index) =>
            <Link id={item.title}
                  key={index}
                  to={item.href}
                  onClick={this.changeActive}
                  className="collection-item"
            >{item.title}</Link>
        );
        return (
                <div className="collection">
                    {res}
                </div>
        );
    }
}

export default MainLayout;