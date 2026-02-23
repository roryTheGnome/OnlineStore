import React from "react";
import "./About.css";
import {useTranslation} from "react-i18next";

function About() {
    const {t}=useTranslation("about");

    return (
        <section className="about">
            <div className="about-left">
                <img
                    src="/assets/about-img.jpg"
                    alt={t("imgAlt")} fetchPriority="high"
                />
            </div>

            <div className="about-right">
                <h2 className="about-title">{t("title")}</h2>
                <h4 className="quote">{t("quote")}</h4>

                <p className="about-text">{t("paragraphs.p1")}</p>

                <p className="about-text">{t("paragraphs.p2")}</p>
            </div>
        </section>
    );
}

export default About;