import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductsDetails = () => {
    const dispatch=useDispatch()
    const itemDetail=useSelector((state)=>state.productReducer.details);
    return (
        <div>
            {itemDetail.map((item)=>{
                  return (
                    <div>
                        <h3>{item.title.slice(0,20) +"..."}</h3>
            
                        <img src={item.image} width="250px" height="250px"alt="" />
            
                        <h3>price:${item.price}</h3>
            
                        <button onClick={()=>dispatch({type:"Add-Cart",date:item})}>Add To Cart</button>
            
                    </div>
                );


            })}
        </div>
    );
};

export default ProductsDetails;