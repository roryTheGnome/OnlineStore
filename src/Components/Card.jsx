import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {addToCart} from "../cartSlice";
import {useTranslation} from "react-i18next";

function Card(props){
    const {t}=useTranslation("products");


    const dispatch=useDispatch();

    const assignQuality= ()=>{
        const quality=Number(props.rating);

        return quality===5 ? "high" : quality>=4 ? "mid" : "low";
    };

    return(
        <div className="products-card">

            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
                <p className={`quality ${assignQuality()}`}>{props.rating}</p>
            </div>

            <p className="product-description">{props.description}</p>

            <div className="card-details">
                <p className="product-detail">{props.brand}</p>
                <p className="product-detail">{props.category}</p>
                <p className="product-detail">{props.price}</p>
                <p className="product-id">{props.id}</p>
            </div>

            <button onClick={() =>
                dispatch(addToCart({id: props.id, title:props.title, price:props.price}))}>
                {t("add")}</button>

        </div>
    );
}

Card.propTypes={
    description: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    catagory: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    brand: PropTypes.string
}

Card.defaultProps={
    description: "-",
    title: "DEMO",
    id: "-",
    catagory: "-",
    price: 0,
    rating: 0,
    brand: "-"
}

export default Card