import App from './App.jsx'
import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/Contact";
import Products from "./Pages/ProductPage/Products";
import PageNotFound from "./Pages/404Page/404Page";
import Cart from "./Pages/Cart";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true, element:<Home/>},
            {path:"contact", element:<Contact/>},
            {path:"products", element:<Products/>},
            {path:"cart", element:<Cart/>},
            {path:"*", element:<PageNotFound/>},
        ]
    }, //404 page here
]);
