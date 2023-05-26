import React from "react";
import {Link} from "react-router-dom";
import './styles';
import {StyleButton} from "./styles";

export const Button = ({ to, name }) => {
    return (
        <Link tabIndex='-1' to={to}>
            <StyleButton type='button'>{ name }</StyleButton>
        </Link>
    );
}