import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../langSlice";
import "./Nav.css";

export default function Nav() {

    const {t}=useTranslation();
    const dispatch=useDispatch();
    const currentLang=useSelector((state)=>state.lang.value);
    const toggleLang=()=>{
        dispatch(setLang(currentLang==="en"?"de": "en"))
    };


    return (
        <nav className="nav">
            <div className="nav-logo">AirWrapper</div>

            <ul className="nav-links">
                <li><Link to="/">{t("home")}</Link></li>
                <li><Link to="/products">{t("products")}</Link></li>
                <li><Link to="/contact">{t("contact")}</Link></li>
            </ul>

            <button className="lang-button" onClick={toggleLang}>
                {currentLang==="en"?"DE": "EN"}
            </button>
        </nav>
    );
}
