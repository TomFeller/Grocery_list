export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = itemId => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_TO_CART,
            id: itemId
        });
    }
};

export const removeFromCart = itemId => {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FROM_CART,
            id: itemId
        });
    }
};

export const emptyCart = () => {
    return (dispatch, getState) => {
        dispatch({
            type: EMPTY_CART
        });
    }
}
