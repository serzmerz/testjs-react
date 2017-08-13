import React from "react";

import { Link } from "react-router-dom";

class OrderItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.orderDate}</td>
                <td>{this.props.orderName}</td>
                <td>{this.props.orderId}</td>
                <td>{this.props.orderType}</td>
                <td>{this.props.customer}</td>
                <td>{this.props.provider}</td>
                <td>{this.props.fulfilled}</td>
                <td>{this.props.statusOrder}</td>
                {(this.props.willBeEdit) ? <td>
                    <Link to={`/edit/${this.props.idRecord}`} className="waves-effect waves-light btn">Edit</Link></td> : '' }
            </tr>
        );
    }
}

export default OrderItem