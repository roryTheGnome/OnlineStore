import React from "react";
import "./Home.css";

function Home() {
    return (
        <section className="home">
            <div className="home-left">
                <h1 className="title">AirWrapper</h1>
                <h3 className="subtitle">...where purity meets quality</h3>
            </div>

            <div className="home-right">
                <img src="https://picsum.photos/id/1056/450/650"></img>
            </div>
        </section>
    );
}

export default Home;
