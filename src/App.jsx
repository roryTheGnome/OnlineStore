import React from "react";
import './App.css'
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App(){
    return(
        <div className="app">
            <Nav />
                <Home />

            <Footer/>
        </div>
    )
}

export default App