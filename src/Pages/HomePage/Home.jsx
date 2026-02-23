import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import Green from "../../Components/Green/Green";
import {useTranslation} from "react-i18next";

function Home() {
    const {t}=useTranslation("footer")
    return (
        <>
            <section className="home">
                <div className="home-left">
                    <h1 className="title">Torba</h1>
                    <h3 className="subtitle">{t("brand.slog")}</h3>
                </div>

                <div className="home-right">
                    <img src="https://picsum.photos/id/558/450/650" alt={t("imgAlt")} fetchPriority="high"/>
                </div>
            </section>
            {/*maybe i should carry these part to its own file?? or is this*/}

            <About/>

            <Green/>
        </>


    );
}

export default Home;
