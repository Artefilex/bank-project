import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : null,
    searchKey: "AAPL"
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
      searchSMA(state, action){
        const {debaunce , data} = action.payload
        state.search = data;
        state.searchKey = debaunce
      }
      
    }
})


export const { searchSMA } = SearchSlice.actions

export default  SearchSlice.reducer