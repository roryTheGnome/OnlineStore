import React from "react";
import "./Contact.css";
import {useTranslation} from "react-i18next";

function Contact(){
    const { t } = useTranslation("contact");

    const locations = t("info.office.locations", { returnObjects: true });

    return(
        <section className="contact">
            <div className="title-area">
                <h1 className="contact-title">{t("title")}</h1>
                <p className="contact-subtitle">{t("subtitle")}</p>
            </div>
            <div className="contact-wrapper">

                <div className="info">
                    <div className="contact-item">
                        <h4>{t("info.email.title")}</h4>
                        <p>{t("info.email.description")}</p>
                        <a href="mailto:example@somemail.com">example@somemail.com</a>
                    </div>

                    <div className="contact-item">
                        <h4>{t("info.phone.title")}</h4>
                        <p>{t("info.phone.description")}</p>
                        <a href="tel:+0000000000">+0 (000) 000 000</a>
                    </div>

                    <div className="contact-item">
                        <h4>{t("info.office.title")}</h4>

                        {locations.map((location, index) => (
                            <div className="office" key={index}>
                                <p>{location}</p>
                                <a href="#">{t("info.office.directions")}</a>
                            </div>
                        ))}

                    </div>
                    {/*MAYBE ADD A MAP HERE LATER??*/}
                </div>

                <div className="contact-foto">
                    <img src="/assets/contact-img.jpg" alt={t("imageAlt")} fetchPriority="high" />
                </div>

            </div>
        </section>
    )
}

export default Contact