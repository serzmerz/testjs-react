import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import orders from './order';
import formData from './formData';

export default combineReducers({
    routing: routerReducer,
    orders,
    formData
})
