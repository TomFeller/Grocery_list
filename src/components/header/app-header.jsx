import React from "react";
import {FaBars} from "react-icons/fa";

export const AppHeader = ({toggleNavigation}) => {
    return (
        <header className="app-header">
            <button className="burger-menu" onClick={toggleNavigation}><FaBars color={"#fff"} size={20}/></button>
            <p>Grocery List</p>
        </header>
    )
};
