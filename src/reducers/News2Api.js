import { createApi ,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";


export const News2Api = createApi({
    reducerPath:"News2Api",
    baseQuery: fetchBaseQuery({baseUrl: `https://gnews.io/api/v4/top-headlines?category=`}),
       
    endpoints: (builder) =>({
        getNews: builder.query({
            query: () => `general&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_NEWS_API_OTHER}`
        }),
  
       
    })
})

export const {useGetNewsQuery , useGetGeneralQuery} = News2Api

