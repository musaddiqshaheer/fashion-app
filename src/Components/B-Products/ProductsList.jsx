import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';


const ProductsList = ({ text }) => {
    const allProducts = useSelector((state) => state.productReducer.product);

    const [products, setproducts] = useState([]);
    const dispatch = useDispatch();
    console.log(products);
    const getproducts = async () => {

        const apiData = await axios.get("https://fakestoreapi.com/products");
        // console.log("---->",products)
        console.log("apiData", apiData);
        allProducts.length === 0 &&
            dispatch({ type: "Add-Products", data: apiData.data });
        setproducts(apiData.data);
    };
    useEffect(() => {
        const filtered = allProducts.filter((item) => item.title.toLowerCase().includes(text.toLowerCase())
        );
        setproducts(filtered);

    }, [text]);

    useEffect(() => {
        getproducts();
    }, []);


    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((item) => {
                return <ProductCard item={item} />

            })}
        </div>
    );
};

export default ProductsList;