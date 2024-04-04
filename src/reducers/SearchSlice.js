import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : null
     
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
      searchSMA(state, action){
        state.search = action.payload 
      }
      
    }
})


export const { searchSMA } = SearchSlice.actions

export default  SearchSlice.reducer