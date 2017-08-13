import React, {Component} from 'react';
import OrderItem from '../../components/OrderItem';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/order';

let formatDate = (date) => {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
};

let checkDate = (dateFirst, dateSecond) => {
      dateFirst = new Date(parseInt(dateFirst));
      dateSecond = new Date(parseInt(dateSecond));
      return (dateFirst.getFullYear() <= dateSecond.getFullYear())
          && (dateFirst.getMonth() <= dateSecond.getMonth())
          && ((dateFirst.getDate() + 3) <= dateSecond.getDate());
};

const OrderList = ({ data, actions, token}) => {

        if(data.didInvalidate) {
        actions.getOrders(token);
        }

    let res;
    if(data.isFetching) {
        res = <div>Загрузка...</div> ;
    }
    else if(data.error) res = <div>{data.error}</div>;
    else res =
            data.items.map((item, index) =>
                <OrderItem
                idRecord={item.id}
                orderDate={formatDate(new Date(parseInt(item.orderDate)))}
                orderName={item.orderTranscription}
                orderId={item.orderNumber}
                orderType={item.orderType}
                customer={item.customerFistName+' '+item.customerSecondName}
                provider={item.orderProvider}
                fulfilled={formatDate(new Date(parseInt(item.orderDatePerformance)))}
                statusOrder={item.orderStatus}
                willBeEdit={checkDate(item.orderDate, item.orderDatePerformance)}
                />
            );
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <div className="divider"> </div>
            <div>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Имя</th>
                        <th>ID заказа</th>
                        <th>Тип заказа</th>
                        <th>Заказчик</th>
                        <th>Поставщик</th>
                        <th>Выполнен</th>
                        <th>Статус</th>
                        <th> </th>
                    </tr>
                    </thead>

                    <tbody>
                    {res}
                    </tbody>
                </table>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.orders
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);