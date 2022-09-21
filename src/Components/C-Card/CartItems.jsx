import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const CartItems = () => {
    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.productReducer.cart);
    // console.log("cart-------------", CartItems);

    return (

        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {CartItems !== undefined &&
                CartItems.map((item) => {
                    return (
                        <div>
                            <h3>{item.title.slice(0, 20) + "..."}</h3>

                            <img src={item.image} width="250px" height="250px" alt="" />

                            <h3>price:${item.price}</h3>


                            <Link to="/details">
                                <button>View Details</button>
                            </Link>
                            <button onClick={() => dispatch({ type: "Remove-Item", data: item })}>remove</button>
                        </div>
                    );

                })}

        </div>
    );
};

export default CartItems;