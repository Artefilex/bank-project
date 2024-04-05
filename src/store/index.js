import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../reducers/SearchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { StockApi } from "../reducers/StockApi";
const store = configureStore({
   reducer:{
      searchItem: SearchReducer,
       [StockApi.reducerPath] : StockApi.reducer
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(StockApi.middleware),
})

setupListeners(store.dispatch);
export default store