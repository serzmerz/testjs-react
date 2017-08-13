import React, {Component} from 'react';
import {Row, Input, Button} from 'react-materialize';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/order';
import * as getFormData from '../../actions/formData';


class EditOrder extends Component {

    constructor(props) {
        super(props);
        if (this.props.data)
            this.state = {
                customerFistName: this.props.data.customerFistName,
                customerSecondName: this.props.data.customerSecondName,
                customerEmail: this.props.data.customerEmail,
                customerPhone: this.props.data.customerPhone,
                orderTranscription: this.props.data.orderTranscription,
                orderType: this.props.data.orderType,
                orderProvider: this.props.data.orderProvider,
                orderDatePerformance: this.props.data.orderDatePerformance,
                orderNumber: this.props.data.orderNumber,
                orderDate: this.props.data.orderDate,
                id: this.props.data.id,
                orderStatus: this.props.data.orderStatus,
                redirectTo: '/',
                canSubmit: false
            };
        else
            this.state = {
                customerFistName: '',
                customerSecondName: '',
                customerEmail: '',
                customerPhone: '',
                orderTranscription: '',
                orderType: '',
                orderProvider: '',
                orderDatePerformance: '',
                redirectTo: '/',
                canSubmit: false
            };
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.getData.getFormData();
    }

    create(e) {
        /*
         * Тут могли бы добавиться регулярки и подсветка по каждому полю
         */
        e.preventDefault();
        if (this.state.customerFistName !== ''
            && this.state.customerSecondName !== ''
            && this.state.customerEmail !== ''
            && this.state.customerPhone !== ''
            && this.state.orderTranscription !== ''
            && this.state.orderType !== ''
            && this.state.orderProvider !== ''
            && this.state.orderDatePerformance !== ''
        )
            this.props.actions.updateOrder(this.state, this.props.token);
        else alert('All fields must be filled!!');
    }

    changeState(formName, e) {
        this.setState({[formName]: e.target.value});
    }

    changeCreateStatus(e) {
        e.preventDefault();
        this.props.actions.changeCreateOrderStatus();
    }

    render() {
        let res;
        let provider = this.props.formData.items.provider.map((item, index) =>
            <option value={item.name}>{item.name}</option>
        );
        let type = this.props.formData.items.type.map((item, index) =>
            <option value={item.name}>{item.name}</option>
        );
        if (this.props.formData.isFetching || this.props.isCreating) res = <div>Loading...</div>;
        else
            res = <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Статус</span>
                            <div className="divider"></div>
                            <Row>
                                <Input s={6} type="select"
                                       label="Статус"
                                       onChange={this.changeState.bind(this, 'orderStatus')}
                                       required
                                       defaultValue={this.state.orderStatus}
                                >
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="Confirm">Confirm</option>
                                    <option value="Done">Done</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Failed">Failed</option>
                                </Input>
                            </Row>

                            <form>

                                <span className="card-title">Заказчик</span>
                                <div className="divider"></div>

                                <Row>
                                    <Input
                                        s={6} label="First Name"
                                        onChange={this.changeState.bind(this, 'customerFistName')}
                                        required
                                        className="validate"
                                        defaultValue={this.state.customerFistName}
                                    />
                                    <Input
                                        s={6} label="Last Name"
                                        onChange={this.changeState.bind(this, 'customerSecondName')}
                                        required
                                        defaultValue={this.state.customerSecondName}
                                    />
                                    <Input type="email"
                                           label="Email" s={6}
                                           onChange={this.changeState.bind(this, 'customerEmail')}
                                           className="validate"
                                           required
                                           defaultValue={this.state.customerEmail}
                                    />
                                    <Input type="text"
                                           label="Phone" s={6}
                                           onChange={this.changeState.bind(this, 'customerPhone')}
                                           className="validate"
                                           required
                                           defaultValue={this.state.customerPhone}
                                    />
                                </Row>

                                <h5>Заказ</h5>
                                <div className="divider"></div>
                                <Row>
                                    <Input s={6} type='select'
                                           label="Тип заказа"
                                           onChange={this.changeState.bind(this, 'orderType')}
                                           required
                                           defaultValue={this.state.orderType}
                                    >
                                        <option value="" disabled selected>Choose your option</option>
                                        {type}
                                    </Input>
                                    <Input s={6} type="select"
                                           label="Поставщик"
                                           onChange={this.changeState.bind(this, 'orderProvider')}
                                           required
                                           defaultValue={this.state.orderProvider}
                                    >
                                        <option value="" disabled selected>Choose your option</option>
                                        {provider}
                                    </Input>

                                    <Input name='on' type='date' label="Дата выполнения заказа"
                                           onChange={function (e, value) {
                                               this.setState({orderDatePerformance: new Date(value).getTime()});
                                           }.bind(this)}
                                           required
                                           defaultValue={new Date(parseInt(this.state.orderDatePerformance)).toDateString()}
                                    />

                                    <Input s={12} label="Номер заказа"
                                           defaultValue={this.state.orderNumber} disabled/>
                                    <Input type="text"
                                           label="Name" s={12}
                                           onChange={this.changeState.bind(this, 'orderTranscription')}
                                           className="validate"
                                           required
                                           defaultValue={this.state.orderTranscription}
                                    />
                                </Row>
                                <Row>
                                    <div className="card-action">
                                        <Button waves='light'
                                                type="submit"
                                                onClick={this.create.bind(this)}
                                        >Submit</Button>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </div>;
        return (
            <div>
                {res}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isCreating: state.orders.isCreating,
        isCreated: state.orders.isCreated,
        formData: state.formData,
        data: state.orders.items.find(item => item.id === Number(ownProps.match.params.id))
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
    getData: bindActionCreators(getFormData, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(EditOrder);