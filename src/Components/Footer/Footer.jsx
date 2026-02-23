import React from "react";
import "./Footer.css";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export default function Footer() {
    const {t}=useTranslation("footer")

    return (
        <footer className="footer">
            <div className="footer-columns">
                <div>
                    <h3>Torba</h3>
                    <p>.{t("brand.slog")}</p>
                </div>

                <div>
                    <h3>{t("contact.title")}</h3>
                    <h4>{t("contact.mail")}</h4>
                    <a href="mailto:example@somemail.com">example@somemail.com</a>
                    <h4>{t("contact.phone")}</h4>
                    <a href="tel:+0000000000">+0 (000) 000 000</a>
                </div>

                <div>
                    <h3>{t("links.title")}</h3>
                    <ul>
                        <li><Link to="/">{t("links.home")}</Link></li>
                        <li><Link to="/products">{t("links.products")}</Link></li>
                        <li><Link to="/contact">{t("links.contact")}</Link></li>
                    </ul>

                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Torba — {t("bottom")}
            </div>
        </footer>
    );
}
