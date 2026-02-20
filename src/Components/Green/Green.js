import React from "react";
import "./Green.css";
import {useTranslation} from "react-i18next";

function Green() {
    const {t}=useTranslation("green");
    const cards = t("cards", { returnObjects: true });

    return (
        <section className="green">
            <h2 className="green-title">{t("title")}</h2>

            <p className="green-intro">{t("intro")}</p>

            <div className="green-cards">
                {cards.map((card, index) => (
                    <div className="green-card" key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Green;