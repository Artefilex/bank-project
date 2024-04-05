import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StockApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => "products",
      }),
      getProduct: builder.query({
        query: (product) => `products/search?q=${product}`,
      }),
    }),
  });
  
  export const { useGetAllProductsQuery, useGetProductQuery } = StockApi;