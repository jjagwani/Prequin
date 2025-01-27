import { createSlice } from "@reduxjs/toolkit";
import { InvestorState } from "../../../Types";

const investorInitialState: InvestorState = {
    investorName: "",
    totalCommitment: 0
};


export const investorSlice = createSlice({
    name: 'investor',
    initialState: investorInitialState,
    reducers: {
        selectInvestor(state, action) {
            state.investorName = action.payload[0];
            state.totalCommitment = action.payload[1];
        },
        resetInvestor(state) {
            state = investorInitialState;
        }
    }
});

export const { selectInvestor, resetInvestor } = investorSlice.actions