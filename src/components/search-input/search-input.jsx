import React from "react";
import { FaSearch } from 'react-icons/fa';
import "./search-input.scss";

export const SearchInput = ({onChange}) => {
    return (
        <div className={"search-input"}>
            <FaSearch className={"search-icon"} color={"#626e7e"}/>
            <input type={"text"}
                   placeholder={"search..."}
                   onChange={onChange}/>
        </div>
    )
};