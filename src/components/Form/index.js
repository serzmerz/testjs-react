import React from 'react';
import {Button, Input, Row} from "react-materialize";

const Form = (props) => {

    return (<div className="row">
        <div className="col s12 m12">
            <div className="card">
                <div className="card-content">
                    {props.StatusInput}
                    <span className="card-title">Заказчик</span>
                    <div className="divider"/>
                    <form>
                        <Row>
                            <Input
                                s={6} label="First Name"
                                onChange={props.changeState.bind(this, 'customerFistName')}
                                required
                                className="validate"
                                defaultValue={props.customerFistName}
                            />
                            <Input
                                s={6} label="Last Name"
                                onChange={props.changeState.bind(this, 'customerSecondName')}
                                required
                                defaultValue={props.customerSecondName}
                            />
                            <Input type="email"
                                   label="Email" s={6}
                                   onChange={props.changeState.bind(this, 'customerEmail')}
                                   className="validate"
                                   required
                                   defaultValue={props.customerEmail}
                            />
                            <Input type="text"
                                   label="Phone" s={6}
                                   onChange={props.changeState.bind(this, 'customerPhone')}
                                   className="validate"
                                   required
                                   defaultValue={props.customerPhone}
                            />
                        </Row>

                        <h5>Заказ</h5>
                        <div className="divider"/>
                        <Row>
                            <Input s={6} type='select'
                                   label="Тип заказа"
                                   onChange={props.changeState.bind(this, 'orderType')}
                                   required
                                   defaultValue={props.orderType}
                            >
                                <option value="" disabled selected>Choose your option</option>
                                {props.type}
                            </Input>
                            <Input s={6} type="select"
                                   label="Поставщик"
                                   onChange={props.changeState.bind(this, 'orderProvider')}
                                   required
                                   defaultValue={props.orderProvider}
                            >
                                <option value="" disabled selected>Choose your option</option>
                                {props.provider}
                            </Input>

                            <Input name='on' type='date' label="Дата выполнения заказа"
                                   onChange={props.changeDate.bind(this)}
                                   required
                                   defaultValue={props.orderDatePerformance}
                            />

                            <Input s={12} label="Номер заказа"
                                   defaultValue={props.orderNumber}
                                   disabled/>
                            <Input type="text"
                                   label="Name" s={12}
                                   onChange={props.changeState.bind(this, 'orderTranscription')}
                                   className="validate"
                                   required
                                   defaultValue={props.orderTranscription}
                            />
                        </Row>
                        <Row>
                            <div className="card-action">
                                <Button waves='light'
                                        type="submit"
                                        onClick={props.create.bind(this)}
                                >Submit</Button>
                            </div>
                        </Row>
                    </form>
                </div>
            </div>
        </div>
    </div>);
};
export default Form;