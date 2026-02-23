import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../langSlice";
import "./Nav.css";

export default function Nav() {

    const {t}=useTranslation();
    const dispatch=useDispatch();
    const currentLang=useSelector((state)=>state.lang.value);

    const [open,setOpen]=useState(false);
    const langs = [
        { code: "en", label: "English" },
        { code: "de", label: "Deutsch" },
        { code: "pl", label: "Polski" },
        { code: "by", label: "Беларуская" },
        { code: "ua", label: "Українська" },
        { code: "ru", label: "Русский" },
    ];
    const handleLang=(lang)=>{
        dispatch(setLang(lang));
        setOpen(false);
    }

    const [menuOpen,setMenuOpen]=useState(false);

    return (
        <nav className="nav">
            <div className="nav-logo">Torba</div>

            <div className={`burger ${menuOpen? "active":"not"}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${menuOpen?"show" :""}`} >
                <li><Link to="/" onClick={()=>setMenuOpen(false)}>{t("home")}</Link></li>
                <li><Link to="/products" onClick={()=>setMenuOpen(false)}>{t("products")}</Link></li>
                <li><Link to="/contact" onClick={()=>setMenuOpen(false)}>{t("contact")}</Link></li>
                <li><Link to="/Cart" onClick={()=>setMenuOpen(false)}>{t("cart")}</Link></li>

                <div className="lang mobile-lang">
                    <button className="lang-button" onClick={()=>setOpen(!open)}> {currentLang.toUpperCase()}</button>

                    {open &&(
                        <ul className="lang-menu">
                            {langs.map((lang)=>
                                <li key={lang.code} className={`lang-item ${currentLang===lang.code? "a":"na"}`}
                                    onClick={()=>handleLang(lang.code)}>
                                    {lang.label}
                                </li>)}
                        </ul>
                    )}

                </div>
            </ul>

            <div className="lang desktop-lang">
                <button className="lang-button" onClick={()=>setOpen(!open)}>
                    {currentLang.toUpperCase()}
                </button>
                {open &&(
                    <ul className="lang-menu">
                        {langs.map((lang)=>
                        <li key={lang.code} className={`lang-item ${currentLang===lang.code? "a":"na"}`}
                        onClick={()=>handleLang(lang.code)}>
                            {lang.label}
                        </li>)}
                    </ul>
                )}
            </div>
        </nav>
    );
}
