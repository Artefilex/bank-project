import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const InterestRateApi = createApi({
    reducerPath: "InterestRateApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://interest-rate-by-api-ninjas.p.rapidapi.com/"}),
    endpoints: (builder) =>({
        getInterestRate: builder.query({
           query: () =>{
         const options = {
            url: 'v1/interestrate',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${import.meta.env.VITE_REALTIME_FINANCE}`,
                'X-RapidAPI-Host': 'interest-rate-by-api-ninjas.p.rapidapi.com'
            }
         }
         return options
           }
        })
    })
})

export const {useGetInterestRateQuery} = InterestRateApi
