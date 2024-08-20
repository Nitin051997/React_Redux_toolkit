import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const customGetDataAction = createAsyncThunk(
    "customGetDataAction",
    async (value, { rejectWithValue }) => {
        console.log("NitinConsole", value);
        try {
            const response = await fetch(`${value?.api}`);
            if(!response.ok){
                throw new Error("Network response was not ok.")
            }
            const data = await response.json();
            return data;
        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    isCustomGetDataLoading: false,
    customGetData: false,
    isCustomGetDataError: false,
};

export const customGetDataReducer = createSlice({
    name: "customGetDataReducer",
    initialState,
    extraReducers: (reducerResult) => {
        reducerResult.addCase(customGetDataAction.pending, (state) => {
            state.isCustomGetDataLoading = true;
        })
        reducerResult.addCase(customGetDataAction.fulfilled, (state, action) => {
            state.isCustomGetDataLoading = false;
            state.customGetData = action.payload;
        })
        reducerResult.addCase(customGetDataAction.rejected, (state, action) => {
            state.isCustomGetDataLoading = false;
            state.customGetData = false;
            state.isCustomGetDataError = action.payload;
        })
    }
});

export default customGetDataReducer.reducer;