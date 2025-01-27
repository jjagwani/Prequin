import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../../Types";


const filterInitialState: FilterState = {
    value: "",
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        selectFilter(state, action) {
            state.value = action.payload;
        },
        resetFilter(state) {
            state.value = "";
        }
    }
});


export const { selectFilter, resetFilter } = filterSlice.actions