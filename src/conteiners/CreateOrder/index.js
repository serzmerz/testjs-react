import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/order';
import * as getFormData from '../../actions/formData';

import Loading from '../../components/Preloader';
import Form from "../../components/Form/index";

class CreateOrder extends Component {

    constructor(props) {
        super(props);
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

        this.changeState = this.changeState.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.create = this.create.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.getData.getFormData();
    }

    create(e) {
        /*
        * Here could be added regulars and lighting for each field
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
            this.props.actions.createOrder(this.state);
        else alert('All fields must be filled!!');
    }

    changeState(formName, e) {
        this.setState({[formName]: e.target.value});
    }

    changeDate(e, value) {
        this.setState({orderDatePerformance: new Date(value).getTime()});
    }

    renderDropDownList = (items) =>
        items.map((item, index) =>
            <option value={item.name}>{item.name}</option>
        );

    render() {

        return (
            <div>
                {(this.props.formData.isFetching || this.props.isCreating) ?
                    <Loading/> :
                    <Form
                        changeState={this.changeState}
                        orderDescription={this.state.orderTranscription}
                        create={this.create}
                        changeDate={this.changeDate}
                        type={this.renderDropDownList(this.props.formData.items.type)}
                        provider={this.renderDropDownList(this.props.formData.items.provider)}
                        orderNumber="Will be calculated on server"
                    />}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isCreating: state.orders.isCreating,
    isCreated: state.orders.isCreated,
    formData: state.formData
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
    getData: bindActionCreators(getFormData, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);