import React,{ useEffect, useState } from "react";
import "./ScrollToTop.css"

export default function ScrollToTop() {
    const [visible,setVisible]=useState()

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 280) {setVisible(true);}
            else {setVisible(false);}
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        visible &&(
            <button className="scroll-top" onClick={scrollTop}>↑</button>
        )
    );
}