import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const singleUserAction = createAsyncThunk(
    "singleUserAction",
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://reqres.in/api/users/${value?.userId}`);
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            const data = await response.json();
            return data?.data;
        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    isUserLoading: false,
    userData: false,
    isUserError: false,
}

export const singleUserReducer = createSlice({
    name: "singleUserReducer",
    initialState,
    extraReducers: (reducersResult) => {
        reducersResult.addCase(singleUserAction.pending, (state) => {
            state.isUserLoading = true;
        })
        reducersResult.addCase(singleUserAction.fulfilled, (state, action) => {
            state.isUserLoading = false;
            state.userData = action.payload;
        })
        reducersResult.addCase(singleUserAction.rejected, (state, action) => {
            state.isUserLoading = false;
            state.userData = false;
            state.isUserError = action.payload;
        })
    }
})

export default singleUserReducer.reducer;