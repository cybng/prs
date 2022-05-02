import { cartStatus, checkStatus } from "../action/Status";

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     rate: 200,
        //     qty: 1,
        // }
    },
    availbilityRequest:[],
    updatingCart: false,
    error: null
};

export default (state = initState, action) => {
    // console.log(action)
    switch(action.type){
        case cartStatus.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartStatus.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartStatus.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartStatus.RESET_CART:
            state = {
                ...initState
            }
            break;
        case checkStatus.CHECK_REQUEST:
            state = {
                ...state
            }
            break;
        case checkStatus.CHECK_SUCCESS:
            state = {
                ...state,
                availbilityRequest:action.payload,
                cartItems:{}
            }
            break;
    }
    return state;
}