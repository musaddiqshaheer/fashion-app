import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const NavigationBar = ({setText}) => {
    const CartItems=useSelector((state)=>state.productReducer.cart)
    return (
        <div>
            <Link to="/">reactapp</Link>
            <input type="Search" onChange={(e)=>setText(e.target.value)} />
            <button>Search</button>
            <Link to="cart">Cart:{CartItems.length} </Link>
        </div>
    );
};

export default NavigationBar;
