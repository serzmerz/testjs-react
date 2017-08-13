import { FETCH_FORM_DATA_REQUEST, FETCH_FORM_DATA_SUCCESS, FETCH_FORM_DATA_FAILURE
} from '../constants/actions';
const initialState = {
    isFetching: false,
    didInvalidate: true,
    items: {
        type: [],
        provider: []
    }
};

export default function formData(state = initialState,action) {
    switch (action.type) {
        case FETCH_FORM_DATA_REQUEST:
            return {...state,
                ...{
                    isFetching: true,
                    didInvalidate: false}};
        case FETCH_FORM_DATA_SUCCESS:
            return {...state,
                ...{
                    isFetching: false,
                    didInvalidate: false,
                    items: action.payload}};
        case FETCH_FORM_DATA_FAILURE:
            return {...state,
                ...{
                    isFetching: false,
                    didInvalidate: false,
                    error: action.error.toString()
                }};
        default:
            return state;
    }
}