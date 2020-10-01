export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (items) => {
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_ORDER,
            items: items
        });
    }
};
//
// export const removeFromCart = itemId => {
//     return (dispatch, getState) => {
//         dispatch({
//             type: REMOVE_FROM_CART,
//             id: itemId
//         });
//     }
// };
