import { configureStore } from "@reduxjs/toolkit";
import CurrencyReducer from "../reducers/CurrencySlice";
import NewsReducer from "../reducers/NewsSlice"
const store = configureStore({
   reducer:{
      currency: CurrencyReducer,
      news:  NewsReducer
   },
   
})


export default store