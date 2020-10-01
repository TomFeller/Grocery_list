import React from "react";
import {useDispatch} from "react-redux";
import {fruits} from "../../json-mock";
import {removeFromCart} from "../../store/actions/cart-actions";
import { VscClose } from 'react-icons/vsc';

export const CartItem = (itemId) => {
    const dispatch = useDispatch();
    const fruit = fruits.find(fruit => fruit.id === itemId);
    const {id, name, price} = fruit;

    return (
        <div className="cart-item" key={id}>
            <p className="cart-item-name">{name}</p>
            <p className="cart-item-price">${price}</p>
            <p className="cart-item-close"
               onClick={() => dispatch(removeFromCart(id))}>
                <VscClose color={"#fff"} size={25}/>
            </p>
        </div>
    )
};