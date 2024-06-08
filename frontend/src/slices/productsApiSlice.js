import { product_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({ // isse main apislice ka endpoint hit karke fill kar sakta hu
    endpoints:(builders) => ({
        getProducts: builders.query({  // build query is used to build the query without any fetch request to axios
            query: () => ({
                url: product_URL,


            }),
            keepUnusedDataFor:5 // how much time we want this data to last
        }),
        getProductsDetails:builders.query({
            query: (productId) => ({
                url: `${product_URL}/${productId}`,
            }),
            keepUnusedDataFor:5 
        })
    }),
});

export  const {useGetProductsQuery,useGetProductsDetailsQuery} = productApiSlice; // we have to prefix with use and suffix with query