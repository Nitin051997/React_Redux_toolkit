import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const handleDelayAction = createAsyncThunk(
    "handleDelayAction",
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?delay=${value.pageNo}`);
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            const data = await response.json();
            return data;
        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    isDelayLoading: false,
    delayData: false,
    isDelayError: false,
}

export const handleDelayReducer = createSlice({
    name: "handleDelayReducer",
    initialState,
    extraReducers: (resultReducer) => {
        resultReducer.addCase(handleDelayAction.pending, (state) => {
            state.isDelayLoading = true;
        })
        resultReducer.addCase(handleDelayAction.fulfilled, (state, action) => {
            state.isDelayLoading = false;
            state.delayData = action.payload;
        })
        resultReducer.addCase(handleDelayAction.rejected, (state, action) => {
            state.isDelayLoading = false;
            state.delayData = false;
            state.isDelayError = action.payload;
        })
    }
})

export default handleDelayReducer.reducer;