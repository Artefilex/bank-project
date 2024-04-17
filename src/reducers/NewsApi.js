import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://real-time-finance-data.p.rapidapi.com/`,
  }),
  params: {},
  endpoints: (builder) => ({
    getCurrenyNews: builder.query({
      query: () => {
        const options = {
          url: "currency-news",
          params: {
            from_symbol: "USD",
            to_symbol: "BTC",
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
    getCyrptoNews: builder.query({
      query: () => {
        const options = {
          url: "currency-news",
          params: {
            from_symbol: "USD",
            to_symbol: "BTC",
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
          },
        };

        return options;
      },
    }),

    getExchangeNews: builder.query({
      query: () => {
        const options = {
          method: "GET",
          url: "stock-news",
          params: {
            symbol: "GS:NYSE",
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
          },
        };
        return options;
      },
    }),
  }),
});

export const {
  useGetCurrenyNewsQuery,
  useGetCyrptoNewsQuery,
  useGetExchangeNewsQuery,
} = NewsApi;
