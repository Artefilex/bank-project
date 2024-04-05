import { createApi ,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const NewsApi = createApi({
    reducerPath: "NewsApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://newsapi.org/v2/`}),
    endpoints: (builder) =>({
        getCurrenyNews: builder.query({
            query: () => `everything?q=currency&apiKey=${import.meta.env.VITE_NEWS_API}`
        }),
        getCyrptoNews: builder.query({
            query: ()=>`everything?q=crypto&apiKey=${import.meta.env.VITE_NEWS_API}`
        }),
        getEmtiaNews :builder.query({
            query: () => `everything?q=commodity&apiKey=${import.meta.env.VITE_NEWS_API}`
        }),
        getExchangeNews: builder.query({
            query: () => `everything?q=exchange&apiKey=${import.meta.env.VITE_NEWS_API}` 
        }),
        getGoldNews: builder.query({
            query:() => `everything?q=gold&apiKey=${import.meta.env.VITE_NEWS_API}`
        }),
        getCountryNews: builder.query({
            query: () => `top-headlines?country=tr&apiKey=${import.meta.env.VITE_NEWS_API}` 
        })
    })
})

export const {useGetCurrenyNewsQuery, useGetCyrptoNewsQuery, useGetEmtiaNewsQuery, useGetExchangeNewsQuery, useGetGoldNewsQuery , useGetCountryNewsQuery} = NewsApi


