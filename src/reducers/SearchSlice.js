import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "AAPL",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSMA(state, action) {
      state.searchKey = action.payload;
    },
  },
});

export const { searchSMA } = SearchSlice.actions;

export default SearchSlice.reducer;
