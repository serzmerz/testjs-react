import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';

import {Route} from 'react-router-dom';
import {Router} from 'react-router';
import thunk from 'redux-thunk';

import history from './utils/history';

import './index.css';
import OrderList from './conteiners/OrderList';
import CreateOrder from './conteiners/CreateOrder';
import EditOrder from './conteiners/EditOrder';
import Home from './conteiners/Home';
import NavBar from './components/NavBar';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
syncHistoryWithStore(history, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NavBar history={history}>
                <Route exact path="/" component={Home}/>
                <Route path="/orders" component={OrderList}/>
                <Route path="/new-order" component={CreateOrder}/>
                <Route path="/edit/:id" component={EditOrder}/>
            </NavBar>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
