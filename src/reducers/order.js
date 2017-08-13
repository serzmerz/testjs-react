import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE,
    CREATE_ORDER_REQUEST, CREATE_ORDERS_SUCCESS, CREATE_ORDERS_FAILURE,
    UPDATE_ORDER_REQUEST, UPDATE_ORDERS_SUCCESS, UPDATE_ORDERS_FAILURE,
    CHANGE_CREATE_ORDER_STATUS, CLEAR_ORDER_LIST
} from '../constants/actions';
const initialState = {
    isFetching: false,
    didInvalidate: true,
    isCreating: false,
    isCreated: false,
    items: []
};

export default function orders(state = initialState,action) {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {...state,
                ...{
                    isFetching: true,
                    didInvalidate: false}};
        case FETCH_ORDERS_SUCCESS:
            return {...state,
                ...{
                    isFetching: false,
                    didInvalidate: false,
                    items: action.payload}};
        case FETCH_ORDERS_FAILURE:
            return {...state,
                ...{
                    isFetching: false,
                    didInvalidate: false,
                    error: action.error.toString()
                }};
        case CREATE_ORDER_REQUEST:
            return {...state,
                ...{
                    isCreating: true,
                    isCreated: false
            }};
        case CREATE_ORDERS_SUCCESS:
            return {...state,
                ...{
                    isCreating: false,
                    isCreated: true,
                    items: [...state.items, action.payload.items ]
                }};
        case CREATE_ORDERS_FAILURE:
            return {...state,
                ...{
                    isCreating: false,
                    isCreated: false,
                    error: action.error.toString()
                }};
        case CHANGE_CREATE_ORDER_STATUS:
            return {...state,
                ...{
                    isCreated: !state.isCreated
                }};
        case UPDATE_ORDER_REQUEST:
            return {...state,
                ...{
                    isUpdating: true
                }};
        case UPDATE_ORDERS_SUCCESS:
            return {...state,
                ...{
                    isUpdating: false,
                    items: state.items.map( (item, index) => {
                    if(item.id !== action.payload.items.id) {
                        // This isn't the item we care about - keep it as-is
                        console.log(item.id);
                        console.log(action.payload.items.id);
                        return item;

                    }

                    // Otherwise, this is the one we want - return an updated value
                        console.log(action.payload.items);
                    return action.payload.items
                })
                }};
        case UPDATE_ORDERS_FAILURE:
            return {...state,
                ...{
                    isUpdating: false,
                    error: action.error.toString()
                }};
        case CLEAR_ORDER_LIST:
            return {...state,
                ...{
                    didInvalidate: true}};
        default:
            return state;
    }
}