import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const ProductsApi= createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://dummyjson.com/products",
    }),
    endpoints:(builder)=> ({
        getProducts: builder.query({query: ()=>"/"}),
        //getProduct: builder.query({query: (id)=>`${id}`}),
        // i thought i could get my products by id but since this is a custom query i dont think this is possible
    })
});

export const {useGetProductsQuery} =ProductsApi;