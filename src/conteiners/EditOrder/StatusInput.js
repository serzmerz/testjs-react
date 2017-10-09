import React from 'react';
import {Row, Input} from 'react-materialize';

const StatusInput = ({changeState, orderStatus}) => {
    return <div><span className="card-title">Статус</span>
        <div className="divider"/>
        <Row>
            <Input s={6} type="select"
                   label="Статус"
                   onChange={changeState.bind(this, 'orderStatus')}
                   required
                   defaultValue={orderStatus}
            >
                <option value="" disabled selected>Choose your option</option>
                <option value="Confirm">Confirm</option>
                <option value="Done">Done</option>
                <option value="Expired">Expired</option>
                <option value="Failed">Failed</option>
            </Input>
        </Row></div>;
};
export default StatusInput;