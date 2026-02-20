import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {ProductsApi} from "./ProductsApi"

export const store= configureStore({
    reducer:{
        [ProductsApi.reducerPath]: ProductsApi.reducer, //so it will auto generates, yey
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductsApi.middleware),
    //so it will auto generates, yey
});

setupListeners(store.dispatch); //to refetch the data when swithing tabs (not needed just i though it is to be cool)