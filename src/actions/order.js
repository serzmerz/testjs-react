import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE,
    CREATE_ORDER_REQUEST, CREATE_ORDERS_SUCCESS, CREATE_ORDERS_FAILURE,
    UPDATE_ORDER_REQUEST, UPDATE_ORDERS_SUCCESS, UPDATE_ORDERS_FAILURE,
    CHANGE_CREATE_ORDER_STATUS, CLEAR_ORDER_LIST,
    API_URL } from '../constants/actions';
import { checkHttpStatus, parseJSON } from '../utils';
import history from '../utils/history';
import {loginUserFailure} from './auth';

export function clearOrderList(){
    return {
        type: CLEAR_ORDER_LIST
    }
}

export function changeCreateOrderStatus(){
    return {
        type: CHANGE_CREATE_ORDER_STATUS
    }
}

function fetchOrdersRequest(){
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

function fetchOrdersSuccess(payload) {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload
    }
}

function fetchOrdersError(error) {
    return {
        type: FETCH_ORDERS_FAILURE,
        error
    }
}

export const getOrders = (token) => dispatch => {
    dispatch(fetchOrdersRequest());
    return fetch(API_URL+'/order', {
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(response => {
            if(response.response.success)
                dispatch(fetchOrdersSuccess(response.response.data));
            else
                dispatch(fetchOrdersError(response.response.error));

        })
        .catch(error => {
            if(error.response.status === 401) {
                dispatch(loginUserFailure(error));
                history.push('/login');
            }
            dispatch(fetchOrdersError(error));
        })
};

export function createOrderSuccess(payload) {
    return {
        type: CREATE_ORDERS_SUCCESS,
        payload
    }
}

export function createOrderFailure(error) {
    return {
        type: CREATE_ORDERS_FAILURE,
        error
    }
}

export function createOrderRequest() {
    return {
        type: CREATE_ORDER_REQUEST
    }
}

export function createOrder(stateData, token) {
    console.log(stateData);
    return function(dispatch) {
        dispatch(createOrderRequest());
        return fetch(API_URL+'/order', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                stateData)
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    dispatch(createOrderSuccess(response.response));
                    history.push('/orders');
                } catch (e) {
                    console.log(e);
                    dispatch(createOrderFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                    dispatch(loginUserFailure());
                    history.push('/login');
                }
            })
            .catch(error => {
                dispatch(createOrderFailure(error));
                dispatch(loginUserFailure(error));
                history.push('/login');
            })
    }
}

/* update order */

export function updateOrderSuccess(payload) {
    return {
        type: UPDATE_ORDERS_SUCCESS,
        payload
    }
}

export function updateOrderFailure(error) {
    return {
        type: UPDATE_ORDERS_FAILURE,
        error
    }
}

export function updateOrderRequest() {
    return {
        type: UPDATE_ORDER_REQUEST
    }
}

export function updateOrder(stateData, token) {
    console.log(stateData);
    return function(dispatch) {
        dispatch(updateOrderRequest());
        return fetch(API_URL+'/order', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                stateData)
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    dispatch(updateOrderSuccess(response.response));
                    history.push('/orders');
                } catch (e) {
                    console.log(e);
                    dispatch(updateOrderFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                    dispatch(loginUserFailure());
                    history.push('/login');
                }
            })
            .catch(error => {
                dispatch(updateOrderFailure(error));
                dispatch(loginUserFailure(error));
                history.push('/login');
            })
    }
}