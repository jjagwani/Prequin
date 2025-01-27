import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../Actions/Filter";
import { investorSlice } from "../Actions/Investor";


export const Store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    investor: investorSlice.reducer
  },
})