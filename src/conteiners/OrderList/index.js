import React, {Component} from 'react';
import OrderItem from '../../components/OrderItem';

class OrderList extends Component {
    render() {
        return (
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
                    <OrderItem orderDate="01.12.15"
                               orderName="Барановская Е.В."
                               orderId="о-15100416"
                               orderType="Опт"
                               customer="Белоус Татьяна Васильевна"
                               provider="Undead"
                               fulfilled="03.12.15"
                               statusOrder="Done"
                    />
                    <OrderItem orderDate="01.12.15"
                               orderName="Барановская Е.В."
                               orderId="о-15100416"
                               orderType="Опт"
                               customer="Белоус Татьяна Васильевна"
                               provider="Undead"
                               fulfilled="03.12.15"
                               statusOrder="Done"
                    />
                    <OrderItem orderDate="01.12.15"
                               orderName="Барановская Е.В."
                               orderId="о-15100416"
                               orderType="Опт"
                               customer="Белоус Татьяна Васильевна"
                               provider="Undead"
                               fulfilled="03.12.15"
                               statusOrder="Done"
                    />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrderList;