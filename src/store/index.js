import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../reducers/SearchSlice";
const store = configureStore({
   reducer:{
      searchItem: SearchReducer,
   },
   
})


export default store