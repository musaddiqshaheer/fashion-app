import React,{useState} from 'react';
import NavigationBar from '../A-Navigation/NavigationBar';
import ProductsList from '../B-Products/ProductsList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CartItems from '../C-Card/CartItems';
import ProductsDetails from '../D-Details/ProductsDetails';

const Landing = () => {
    const [text,setText]=useState("")
    return (
        <div>
            <BrowserRouter>
            <NavigationBar setText={setText}/>
            <Routes>
                <Route path="/" element={<ProductsList text={text}/>}/>
                <Route path="/Cart" element={<CartItems/>} />
                <Route path="/details" element={<ProductsDetails/>}/>
            </Routes>
            </BrowserRouter>


        </div>
    );
};

export default Landing;