import React from "react";
import {Route, Switch} from "react-router-dom";
import {NewOrder} from "../new-order/new-order";
import {Orders} from "../orders/orders";

export const AppContent = () => {
    return (
        <div className={"app-content"}>
            <Switch>
                <Route path="/new-order" component={NewOrder}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/" component={NewOrder}/>
            </Switch>
        </div>
    )
};
