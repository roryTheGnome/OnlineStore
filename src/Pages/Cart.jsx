import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart,increaseQua,decreaseQua,clearCart} from "../cartSlice";

function Cart(){
    const {items}=useSelector(state=>state.cart);
    const dispatch=useDispatch();

    const total=items.reduce((sum,item)=>sum+(item.price*item.quantity),0);

    return(
        <div>
            <h2>Cart</h2>

            {items.map(item=>(
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.price} pln</p>
                    <p>Quantity: {item.quantity}</p>

                    <button onClick={()=>dispatch(increaseQua(item.id))}>+</button>
                    <button onClick={()=>dispatch(decreaseQua(item.id))}>-</button>
                    <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>

                </div>
            ))}

            <h3>Total: ${total.toFixed(2)}</h3>

            <button onClick={()=>dispatch(clearCart())}>Empty Cart</button>
            <button onClick={()=>alert("You are being directed to payment system")}>Pay</button>

        </div>
    )
}
export default Cart