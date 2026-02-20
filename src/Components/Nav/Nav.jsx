import React from "react";
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-logo">AirWrapper</div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            {/*HERE COMES THE LANG TOGGLE*/}
        </nav>
    );
}
