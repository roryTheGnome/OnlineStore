import App from './App.jsx'
import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/Contact";
import Products from "./Pages/ProductPage/Products";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true, element:<Home/>},
            {path:"/contact", element:<Contact/>},
            {path:"/products", element:<Products/>},
        ]
    }, //404 page here
]);
