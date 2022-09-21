import React from 'react';
import { useDispatch } from 'react-redux';
import  {Link}from "react-router-dom";
// import "./ProductCard.css";

const ProductCard = ({item}) => {
    const dispatch=useDispatch();
    return (
        <div>
            <h3>{item.title.slice(0,20) +"..."}</h3>

            <img src={item.image} width="250px" height="250px"alt="" />

            <h3>price:${item.price}</h3>

            <button onClick={()=>dispatch({type:"Add-Cart",date:item})}>Add To Cart</button>

            <Link to ="/details">
            <button onClick={()=>dispatch({type:"Selected-Item",data:item})}>View Details</button>
            </Link>
        </div>
    );
};

export default ProductCard;