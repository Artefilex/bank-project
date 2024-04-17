import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StockApi = createApi({
    reducerPath: "StockApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.polygon.io/` }),
    endpoints: (builder) => ({
      getAllStocks: builder.query({
        query: () =>{
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 2);
            const yesterdayStr = yesterday?.toISOString()?.split("T")[0];
            return `v2/aggs/grouped/locale/us/market/stocks/${yesterdayStr}?adjusted=true&apiKey=${
                import.meta.env.VITE_EXCHANGE_API
              }`
        }    
      }),
      getSearch: builder.query({
        query: (searchKey) => `v1/indicators/sma/${searchKey}?timespan=day&adjusted=true&window=50&series_type=close&order=desc&apiKey=${import.meta.env.VITE_EXCHANGE_API}`,
      }),
      }),
  });
  
  export const { useGetAllStocksQuery, useGetSearchQuery,useGetSearchResultQuery } = StockApi;