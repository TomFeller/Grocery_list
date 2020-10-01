import {CREATE_ORDER} from "../actions/orders-actions";

const initialState = {
    carts: []
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            const newOrder = {
                id: state.carts.length,
                items: action.items,
                created_at: new Date()
            };
            const carts = state.carts.concat(newOrder);

            return {
                carts: carts
            };

        default:
            return state;
    }
};