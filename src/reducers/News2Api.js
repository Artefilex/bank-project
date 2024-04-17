import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const News2Api = createApi({
  reducerPath: "News2Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://biztoc.p.rapidapi.com/" }),

  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: () => {
        const options = {
          url: "search",
          params: { q: "currency" },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "biztoc.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
    getGoldNews: builder.query({
      query: () => {
        const options = {
          url: "search",
          params: { q: "XAU" },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "biztoc.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
    getBtcNews: builder.query({
      query: () => {
        const options = {
          url: "search",
          params: { q: "BTC" },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "biztoc.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
    getEnergyNews: builder.query({
      query: () => {
        const options = {
          url: "search",
          params: { q: "energy" },
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "biztoc.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
    getAllNews: builder.query({
      query: () => {
        const options = {
          method: "GET",
          url: "news/latest",
          headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_REALTIME_FINANCE}`,
            "X-RapidAPI-Host": "biztoc.p.rapidapi.com",
          },
        };

        return options;
      },
    }),
  }),
});

export const {
  useGetCurrenciesQuery,
  useGetGoldNewsQuery,
  useGetBtcNewsQuery,
  useGetEnergyNewsQuery,
  useGetAllNewsQuery,
} = News2Api;
