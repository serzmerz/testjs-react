import React from 'react';
const TableOfList = ({items}) => {
    return <div className="row">
        <div className="col s12 m12">
            <div className="card">
                <div className="card-content">
                    <div className="divider"/>
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
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default TableOfList;