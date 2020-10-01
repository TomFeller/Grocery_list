import React from "react";
import {Link} from "react-router-dom";
import "./app-navigation.scss";
import { useLocation } from 'react-router-dom'
import classNames from "classnames";

import {AiOutlineUnorderedList, AiOutlineShoppingCart} from "react-icons/ai"



export const AppNavigation = ({isNavOpen}) => {
    const location = useLocation();

    return (
        <nav className={classNames("app-navigation", {open: isNavOpen})}>
            <ul className={"app-navigation-list"}>
                <li className={classNames("app-navigation-item", {active: location.pathname === "/orders"})}>
                    <Link to="/orders">
                        {isNavOpen ? "Orders" : <AiOutlineShoppingCart size={20}/>}
                    </Link>
                </li>
                <li className={classNames("app-navigation-item", {active: location.pathname === "/new-order"})}>
                    <Link to="/new-order">
                        {isNavOpen ? "New Order" : <AiOutlineUnorderedList size={20}/>}
                    </Link>
                </li>
            </ul>
        </nav>
    )
};
