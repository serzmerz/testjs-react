import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';

class CreateOrder extends Component {
    render() {
        return (
        <div>
        <div className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Заказчик</span>
                        <div className="divider"> </div>
                        <form>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"/>
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"/>
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input disabled id="disabled" type="text" className="validate"/>
                                    <label htmlFor="disabled">Disabled</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="phone" type="text" className="validate"/>
                                    <label htmlFor="phone">Phone number</label>
                                </div>
                            </div>

                            <h5>Заказ</h5>
                            <div className="divider"> </div>
                            <Row>
                                <Input placeholder="Placeholder" s={6} label="First Name" />
                            </Row>

                        </form>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

        </div>
        );
    }
}

export default CreateOrder;