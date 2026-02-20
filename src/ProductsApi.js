import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const ProductsApi= createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://dummyjson.com/c/ac2c-c3dd-479d-9796",
    }),
    endpoints:(builder)=> ({
        getProducts: builder.query({query: ()=>"/"}),
        //getProduct: builder.query({query: (id)=>`${id}`}),
        // i thought i could get my products by id but since this is a custom query i dont think this is possible
    })
});

export const {useGetProductsQuery} =ProductsApi;