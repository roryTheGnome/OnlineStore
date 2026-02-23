import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart,increaseQua,decreaseQua,clearCart} from "../../cartSlice";
import "./Cart.css"

function Cart(){
    const {items}=useSelector(state=>state.cart);
    const dispatch=useDispatch();

    const total=items.reduce((sum,item)=>sum+(item.price*item.quantity),0);

    return(
        <section className="cart">
            <h2 className="cart-title">Cart</h2>

            {items.map(item=>(
                <div className="cart-products" key={item.id}>
                    <h4 className="cart-product-title">{item.title}</h4>
                    <p className="cart-product-price">{item.price} pln</p>
                    <p className="cart-product-qua">Quantity: {item.quantity}</p>

                    <div className="cart-buttons">
                        <button className="cart-product-button" onClick={()=>dispatch(increaseQua(item.id))}>+</button>
                        <button className="cart-product-button" onClick={()=>dispatch(decreaseQua(item.id))}>-</button>
                        <button className="cart-product-button" onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>

                </div>
            ))}

            <h3 className="cart-sum">Total: ${total.toFixed(2)}</h3>

            <button className="cart-button" onClick={()=>dispatch(clearCart())}>Empty Cart</button>
            <button className="cart-button" onClick={()=>alert("You are being directed to payment system")}>Pay</button>

        </section>
    )
}
export default Cart