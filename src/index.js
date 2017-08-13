import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';

import { Route, Switch} from 'react-router-dom';
import {Router} from 'react-router';
import thunk from 'redux-thunk';

import history from './utils/history';

import './index.css';
import OrderList from './conteiners/OrderList';
import CreateOrder from './conteiners/CreateOrder';
import EditOrder from './conteiners/EditOrder';
import Home from './conteiners/Home';
import MainLayout from './components/MainLayout';
import NavBar from './components/NavBar';
import registerServiceWorker from './registerServiceWorker';

import {loginUserSuccess} from './actions/auth';
import LoginForm from './conteiners/LoginForm';
import SignupForm from './conteiners/SignupForm';
import {requireAuthentication} from './components/AuthenticatedComponent';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
syncHistoryWithStore(history, store);

let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="container">

                <NavBar/>
                <div className="row">
                    <div className="col s12 m4 l3">
                        <MainLayout history={history}/>
                    </div>

                    <div className="col s12 m8 l9">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/orders" component={requireAuthentication(OrderList)}/>
                            <Route path="/new-order" component={requireAuthentication(CreateOrder)}/>
                            <Route path="/edit/:id" component={requireAuthentication(EditOrder)}/>
                            <Route path="/login" component={LoginForm}/>
                            <Route path="/signup" component={SignupForm}/>
                        </Switch>
                    </div>
                </div>

            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
