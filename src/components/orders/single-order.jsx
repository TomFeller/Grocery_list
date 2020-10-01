import React, {useState} from "react";
import {CartItem} from "../new-order/new-order-cart-item";
import {Box} from "../../style/styles";
import moment from 'moment';
import {totalPrice} from "../../helpers/calculate-cart-total";
import { FaAngleDown } from 'react-icons/fa';

const numbers = ["one", "two", "three", "four"];

export const SingleOrder = (order) => {
    const [isOpen, setIsOpen] = useState(true);
    const orderNumber = numbers[order.id];
    const cartLength = order.items.length;
    const title = `Order number ${orderNumber}`;
    const date = new Date(order.created_at);
    const created_at = moment(date).calendar();

    return (
        <Box width={634} className="single-order" key={order.id}>
            <div className="single-order-details" onClick={() => setIsOpen(!isOpen)}>
                <div>
                <h3 className="single-order-title">{title} <span>({cartLength} item{cartLength > 1 ? "s" : ""})</span></h3>
                <h3 className="single-order-date">{created_at}</h3>
                </div>
                <FaAngleDown color={"#fff"} size={30}/>
            </div>

            {isOpen &&
            <>
                <div className="single-order-items">
                    {order.items.map(CartItem)}
                </div>

                <div className="single-order-total">
                    Total Cost: <span>${totalPrice(order.items)}</span>
                </div>
            </>
            }
        </Box>
    )
};