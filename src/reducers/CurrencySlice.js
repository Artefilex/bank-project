import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: { }
     
}

const CurrencySlice = createSlice({
    name: "currency",
    initialState,
    reducers:{
      addCurrency(state, action){
        state.items = action.payload 
      }
      
    }
})


export const { addCurrency } = CurrencySlice.actions

export default  CurrencySlice.reducer