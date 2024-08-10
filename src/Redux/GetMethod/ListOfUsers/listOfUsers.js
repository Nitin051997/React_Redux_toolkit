import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const listOfUserAction = createAsyncThunk(
    "listOfUserAction",
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${value?.pageNo}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    isListLoading: false,
    dataList: false,
    isListError: false,
}

export const listOfUserReducer = createSlice({
    name: "listOfUserReducer",
    initialState,
    extraReducers: (reducersResult) => {
        reducersResult.addCase(listOfUserAction.pending, (state) => {
            state.isListLoading = true;
            state.isListError = false;
        })
        reducersResult.addCase(listOfUserAction.fulfilled, (state, action) => {
            state.isListLoading = false;
            state.dataList = action.payload;
        })
        reducersResult.addCase(listOfUserAction.rejected, (state, action) => {
            state.isListLoading = false;
            state.dataList = false;
            state.isListError = action.payload;
        })
    }
})

export default listOfUserReducer.reducer;