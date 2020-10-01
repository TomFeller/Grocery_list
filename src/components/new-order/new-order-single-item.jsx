import {addToCart, removeFromCart} from "../../store/actions/cart-actions";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox} from "../checkbox/checkbox";

export const SingleFruit = ({fruit}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const {id, name, price} = fruit;
    const toggle = (checked) => dispatch(checked ? addToCart(id) : removeFromCart(id));

    return (
        <div className={"fruit-item"} key={id}>
            <Checkbox onChange={toggle}
                      label={name}
                      isChecked={cart.some(item => item === id)}/>

            <p className={"fruit-item-price"}>${price}</p>
        </div>
    )
};