import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../reducers/SearchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { StockApi } from "../reducers/StockApi";
import { NewsApi } from "../reducers/NewsApi";
import { InterestRateApi } from "../reducers/InterestRateApi";
import { News2Api } from "../reducers/News2Api";
import { FinnHubApi } from "../reducers/FinnHubApi";
import { StockSearchApi } from "../reducers/StockSearchApi";
import { StockDataApi } from "../reducers/StockDataApi";
const store = configureStore({
  reducer: {
    searchItem: SearchReducer,
    [StockApi.reducerPath]: StockApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
    [InterestRateApi.reducerPath]: InterestRateApi.reducer,
    [News2Api.reducerPath]: News2Api.reducer,
    [FinnHubApi.reducerPath]: FinnHubApi.reducer,
    [StockSearchApi.reducerPath]: StockSearchApi.reducer,
    [StockDataApi.reducerPath]: StockDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      StockApi.middleware,
      NewsApi.middleware,
      InterestRateApi.middleware,
      News2Api.middleware,
      FinnHubApi.middleware,
      StockSearchApi.middleware,
      StockDataApi.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
