import React from "react";
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-logo">AirWrapper</div>

            <ul className="nav-links">
                <li><a href="/public">Home</a></li>
                <li><a href="/public">Products</a></li>
                <li><a href="/public">Contact</a></li>
            </ul>

            {/*HERE COMES THE LANG TOGGLE*/}
        </nav>
    );
}
