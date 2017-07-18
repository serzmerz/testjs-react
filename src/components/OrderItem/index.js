import React from "react";

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
            </tr>
        );
    }
}

export default OrderItem