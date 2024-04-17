import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StockDataApi = createApi({
  reducerPath: "StockDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://devapi-finance.p.rapidapi.com/v2/markets/`,
  }),
  endpoints: (builder) => ({
    getAllStocks: builder.query({
      query: (page) => {
        const options = {
          url: "tickers",
          params: {
            type: "STOCKS",
            page: `${page}`,
          },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "mboum-finance.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
  }),
});

export const { useGetAllStocksQuery } = StockDataApi;
