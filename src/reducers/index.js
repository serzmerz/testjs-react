import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import orders from './order';
import formData from './formData';
import auth from './auth';
import signup from './signup';

export default combineReducers({
    routing: routerReducer,
    orders,
    formData,
    auth,
    signup
})
