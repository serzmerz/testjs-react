import { FETCH_FORM_DATA_REQUEST, FETCH_FORM_DATA_SUCCESS, FETCH_FORM_DATA_FAILURE,
    API_URL } from '../constants/actions';
import { checkHttpStatus, parseJSON } from '../utils';

function fetchDataRequest(){
    return {
        type: FETCH_FORM_DATA_REQUEST
    }
}

function fetchDataSuccess(payload) {
    return {
        type: FETCH_FORM_DATA_SUCCESS,
        payload
    }
}

function fetchDataError(error) {
    return {
        type: FETCH_FORM_DATA_FAILURE,
        error
    }
}

export const getFormData = () => dispatch => {
    dispatch(fetchDataRequest()); //Действие, информирующее редюсер о том, что запрос начался.
    return fetch(API_URL+'/order/data')
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(response => {
            if(response.response.success)
                dispatch(fetchDataSuccess(response.response.data));
            else
                dispatch(fetchDataError(response.response.error));

        })
        .catch(error => {
            dispatch(fetchDataError(error));
        })
};
