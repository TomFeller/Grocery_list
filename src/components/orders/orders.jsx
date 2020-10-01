import React from "react";
import {PageTitle} from "../../style/styles";
import {useSelector} from "react-redux";
import {SingleOrder} from "./single-order";
import "./orders.scss";

export const Orders = () => {
    const orders = useSelector(state => state.orders.carts);

     return (
        <div className={"new-order"}>
            <PageTitle>Orders</PageTitle>
            {orders.map(SingleOrder)}
        </div>
    )
};