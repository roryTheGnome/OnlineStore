import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div>
                    <h3>AirWrapper</h3>
                    <p>...where purity meets responsibility</p>
                </div>

                <div>
                    <h3>Contact</h3>
                    <h4>Mail</h4>
                    <a href="mailto:example@somemail.com">example@somemail.com</a>
                    <h4>Phone</h4>
                    <a href="tel:+0000000000">+0 (000) 000 000</a>
                </div>

                <div>
                    <h3>Links</h3>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/contact">Contact</a>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} AirBottle — All rights reserved
            </div>
        </footer>
    );
}
