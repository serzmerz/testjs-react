import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/order';
import * as getFormData from '../../actions/formData';
import Loading from "../../components/Preloader/index";
import Form from "../../components/Form/index";
import StatusInput from "./StatusInput";

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
            this.props.actions.updateOrder(this.state, this.props.token);
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
                {(this.props.formData.isFetching || this.props.isCreating) ? <Loading/>
                    : <Form
                        StatusInput={<StatusInput orderStatus={this.state.orderStatus} changeState={this.changeState}/>}
                        changeState={this.changeState}
                        orderTranscription={this.state.orderTranscription}
                        create={this.create}
                        changeDate={this.changeDate}
                        type={this.renderDropDownList(this.props.formData.items.type)}
                        provider={this.renderDropDownList(this.props.formData.items.provider)}
                        orderNumber="Will be calculated on server"
                        customerFistName={this.state.customerFistName}
                        customerSecondName={this.state.customerSecondName}
                        customerEmail={this.state.customerEmail}
                        customerPhone={this.state.customerPhone}
                        orderType={this.state.orderType}
                        orderProvider={this.state.orderProvider}
                        orderDatePerformance={new Date(parseInt(this.state.orderDatePerformance)).toDateString()}
                    />}
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