import React from "react";
import PropTypes from "prop-types";

function Card(props){

    const assignQuality= ()=>{
        const quality=Number(props.aquality);

        return quality===3 ? "low" : quality===4 ? "mid" : "high";
    };

    return(
        <div className="products-card">

            <div className="card-header">
                <h3 className="card-title">{props.pName}</h3>
                <p className={`quality ${assignQuality()}`}> AQ {props.aquality}</p>
            </div>

            <p className="product-description">{props.description}</p>

            <div className="card-details">
                <p className="product-detail">{props.tones}</p>
                <p className="product-id">{props.pId}</p>
            </div>


        </div>
    );
}

Card.propTypes={
    description: PropTypes.string,
    pName: PropTypes.string,
    pId: PropTypes.string,
    aquality: PropTypes.string,
    tones: PropTypes.string
}

Card.defaultProps={
    description: "-",
    pName: "DEMO",
    pId: "-",
    aquality: "-",
    tones: "-"
}

export default Card