import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[]
};

const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers:{

        addToCart:(state,action)=>{
            const item=action.payload;
            const has=state.items.find(i=>i.id===item.id);

            if(has){
                has.quantity+=1;
            }
            else{
                state.items.push({...item,quantity:1});
            }
        },

        removeFromCart:(state,action)=>{
            state.items=state.items.filter(i=>i.id!==action.payload);
        },

        increaseQua:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload);
            if(item)item.quantity+=1;
        },

        decreaseQua:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload);
            if(item&&item.quantity>1)item.quantity-=1;
        },

        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const{
    addToCart, removeFromCart, increaseQua,decreaseQua,clearCart
} = cartSlice.actions;


export default cartSlice.reducer;