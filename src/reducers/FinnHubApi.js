import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FinnHubApi = createApi({
  reducerPath: "FinnHubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://finnhub.io/api/v1/" }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () =>
        `news?category=general&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
    getCurrenyNews: builder.query({
      query: () =>
        `news?category=currency&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
    getCyrptoNews: builder.query({
      query: () =>
        `news?category=cyrpto&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
    getEmtiaNews: builder.query({
      query: () =>
        `news?category=commodity&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
    getExchangeNews: builder.query({
      query: () =>
        `news?category=exchange&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
    getGoldNews: builder.query({
      query: () =>
        `news?category=gold&token=${import.meta.env.VITE_FINNHUB_API}`,
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetCurrenyNewsQuery,
  useGetCyrptoNewsQuery,
  useGetEmtiaNewsQuery,
  useGetExchangeNewsQuery,
  useGetGoldNewsQuery,
} = FinnHubApi;
