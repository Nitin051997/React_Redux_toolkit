import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserDetails = createAsyncThunk(
    "getUserDetails",
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${value?.useId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    userLoading: false,
    userData: false,
    userError: false,
}

export const getUserDetailsResult = createSlice({
    name: "getUserDetailsResult",
    initialState,
    extraReducers: (reducersResult) => {
        reducersResult.addCase(getUserDetails.pending, (state) => {
            state.userLoading = true;
        })
        reducersResult.addCase(getUserDetails.fulfilled, (state, action) => {
            state.userLoading = false;
            state.userData = action.payload;
        })
        reducersResult.addCase(getUserDetails.rejected, (state, action) => {
            state.userLoading = false;
            state.userData = false;
            state.userError = action.payload;
        })
    }
})

export default getUserDetailsResult.reducer;