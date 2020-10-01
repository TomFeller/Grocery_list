import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from "../actions/cart-actions";


const initialState = {
    items: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                items: state.items.concat(action.id)
            };

        case REMOVE_FROM_CART:
            return {
                items: state.items.filter(item => item !== action.id)
            };

        case EMPTY_CART: {
            return {
                items: []
            }
        }
        default:
            return state;
    }
};