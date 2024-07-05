import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsPage = createApi({
    reducerPath: "AllQueriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),

    endpoints: (builder) => ({
        productPageFilter: builder.query({
            query: () => "/api/productPage",
        }),


        addToCart: builder.mutation({
            query: (body) => {
                return {
                    url: `/api/addToCart`,
                    method: 'POST',
                    body: body
                }
            },
        }),


    }),
});

export const { useProductPageFilterQuery, useAddToCartMutation } = ProductsPage;
