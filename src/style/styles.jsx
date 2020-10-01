import styled from "styled-components";

const green = "#46e1b6";
const black = "#06090e";
const gray = "#1f242d";

export const PageTitle = styled.h1`
    font-size: 35px;
    color:#fff;
    font-weight: normal
`;

export const SectionTitle = styled.h3`
    font-size: 22px;
    color: ${green};
    text-align: center;
    font-weight: normal;
`;

export const Box = styled.div`
    width: ${props => props.width ? props.width + "px" : "auto"};
    background-color: ${black};
    border: 1px solid ${gray};
 `;

export const Button = styled.button`
    width: ${props => props.width || "auto"};
    border: 0;
    background-color: ${props => props.offset ? "transparent" : `${green}`} ;
    color:#fff;
    padding: 13px 41px;
    border: 1px solid ${green};
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    outline: 0;
    margin-bottom: 20px;
    a {
        color: inherit;
        text-decoration: none;
    }
    &:hover {
       background-color: ${green} ;
    }
`;