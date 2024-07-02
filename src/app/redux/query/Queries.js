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

        productsByQuery: builder.query({
            query: (query) => `/api/productPage?${query}`,
        }),
    }),
});

export const { useProductPageFilterQuery, useProductsByQueryQuery } = ProductsPage;
