import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        const redirectRoute = this.props.location || '/';
        this.state = {
            email: '',
            password: '',
            redirectTo: redirectRoute
        };
    }

    login(e) {
        e.preventDefault();
        this.props.actions.loginUser(this.state.email, this.state.password, this.state.redirectTo);
    }

    logout(e) {
        e.preventDefault();
        this.props.actions.logoutAndRedirect();
        //<Link onClick={() => this.props.actions.logoutAndRedirect()}>Logout</Link>
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render () {
        let res = (this.props.isAuthenticated)? <div>
            <button type='button'
                    className='btn btn-lg'
                    onClick={this.logout.bind(this)}>Logout</button>
        </div> :
            <form role='form'>
                <div className='form-group'>
                    <input type='text'
                           className='form-control input-lg'
                           value = {this.state.email}
                           onChange={this.handleChangeEmail.bind(this)}
                           placeholder='Login' />
                </div>
                <div className='form-group'>
                    <input type='password'
                           className='form-control input-lg'
                           value = {this.state.password}
                           onChange={this.handleChangePassword.bind(this)}
                           placeholder='Password' />
                </div>
                <button type='submit'
                        className='btn btn-lg'
                        disabled={this.props.isAuthenticating}
                        onClick={this.login.bind(this)}>Submit</button>
            </form>;
        return (
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Log in to view protected content!</span>
                                <div className="divider"> </div>
                {this.props.statusText ? <div className='alert alert-info'>{this.props.statusText}</div> : ''}
                {res}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
//reactMixin(LoginForm.prototype, React.addons.LinkedStateMixin);

const mapStateToProps = (state, ownProps) => ({
    isAuthenticating   : state.auth.isAuthenticating,
    statusText         : state.auth.statusText,
    isAuthenticated      : state.auth.isAuthenticated,
    location: ownProps.match.params.next
});
const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);