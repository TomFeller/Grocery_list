import {fruits} from "../json-mock";

export const totalPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += fruits[cart[i]].price ;
    }
    return total;
};