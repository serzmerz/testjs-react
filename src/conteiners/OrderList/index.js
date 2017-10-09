import React from 'react';
import OrderItem from '../../components/OrderItem';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/order';
import Loading from "../../components/Preloader/index";
import TableOfList from "./TableOfList";

const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return dd + '.' + mm + '.' + yy;
};

const checkDate = (dateFirst, dateSecond) => {
    dateFirst = new Date(parseInt(dateFirst, 10));
    dateSecond = new Date(parseInt(dateSecond, 10));
    return (dateFirst.getFullYear() <= dateSecond.getFullYear())
        && (dateFirst.getMonth() <= dateSecond.getMonth())
        && ((dateFirst.getDate() + 3) <= dateSecond.getDate());
};

const OrderList = ({data, actions}) => {

    if (data.didInvalidate) {
        actions.getOrders();
    }

    const renderTableItems = data.items.map((item, index) =>
        <OrderItem
            idRecord={item.id}
            orderDate={formatDate(new Date(parseInt(item.orderDate, 10)))}
            orderName={item.orderTranscription}
            orderId={item.orderNumber}
            orderType={item.orderType}
            customer={item.customerFistName + ' ' + item.customerSecondName}
            provider={item.orderProvider}
            fulfilled={formatDate(new Date(parseInt(item.orderDatePerformance, 10)))}
            statusOrder={item.orderStatus}
            willBeEdit={checkDate(item.orderDate, item.orderDatePerformance)}
        />);

    let res;
    if (data.isFetching) res = <Loading/>;
    else if (data.error) res = <div>{data.error}</div>;
    else res = <TableOfList items={renderTableItems}/>;

    return <div>{res}</div>;

};

const mapStateToProps = (state) => {
    return {
        data: state.orders
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);