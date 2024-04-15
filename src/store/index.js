import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../reducers/SearchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { StockApi } from "../reducers/StockApi";
import { NewsApi } from "../reducers/NewsApi";
import {InterestRateApi} from "../reducers/InterestRateApi"
const store = configureStore({
   reducer:{
      searchItem: SearchReducer,
       [StockApi.reducerPath] : StockApi.reducer,
       [NewsApi.reducerPath] : NewsApi.reducer,
       [InterestRateApi.reducerPath] : InterestRateApi.reducer
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(StockApi.middleware, NewsApi.middleware ,InterestRateApi.middleware),
  
})

setupListeners(store.dispatch);
export default store