import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainLayout extends Component {
    render() {
        return (
                <div className="collection">
                    <Link to="/" className="collection-item">Home</Link>
                    <Link to="/orders" className="collection-item">Order list</Link>
                    <Link to="/new-order" className="collection-item active">New order</Link>
                </div>
        );
    }
}

export default MainLayout;