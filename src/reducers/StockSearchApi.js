import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StockSearchApi = createApi({
  reducerPath: "StockSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://apistocks.p.rapidapi.com/" }),

  endpoints: (builder) => ({
    getStocSearchkData: builder.query({
      query: (searchKey) => {
        const today = new Date();
        today.setDate(today.getDate()- 1);
        const todayStr = today.toISOString().split('T')[0];
        const options = {
            url: "daily",
            params: {
                symbol: `${searchKey}`,
                dateStart: `${todayStr}`,
                dateEnd: `${todayStr}`
              },
          headers: {
            "X-RapidAPI-Key":`${import.meta.env.VITE_REALTIME_FINANCE}`,
            'X-RapidAPI-Host': 'apistocks.p.rapidapi.com'
          },
        };

        return options;
      },
    

    }),
  }),
});

export const {useGetStocSearchkDataQuery} = StockSearchApi