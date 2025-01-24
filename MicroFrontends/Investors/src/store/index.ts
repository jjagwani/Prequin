import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { FilterState, InvestorState } from "../Types";


const filterInitialState: FilterState = {
  value: "",
};

const investorInitialState: InvestorState = {
  investorName: "",
  totalCommitment: 0
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        selectFilter (state, action) {
            state.value = action.payload;
        },
        resetFilter (state) {
            state.value = "";
        }
    }
});



export const investorSlice = createSlice({
  name: 'investor',
  initialState: investorInitialState,
  reducers: {
      selectInvestor (state, action) {
          state.investorName = action.payload[0];
          state.totalCommitment = action.payload[1];
      },
      resetInvestor (state) {
          state= investorInitialState;
      }
  }
});

export const { selectFilter, resetFilter } = filterSlice.actions

export const { selectInvestor, resetInvestor } = investorSlice.actions

export const store = configureStore({
    reducer: {
      filter: filterSlice.reducer,
      investor: investorSlice.reducer
    },
  })