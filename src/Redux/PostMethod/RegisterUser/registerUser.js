import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUserAction = createAsyncThunk(
    "registerUserAction",
    async (value, { rejectWithValue }) => {
        const apiRequest = {
            "method": "POST",
            "header": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        }
        try {

            const response = await fetch(`https://reqres.in/api/login`, apiRequest);
            const data = await response.json();
            
            if(!response.ok){
                throw new Error(JSON.stringify(data))
            }

            return data;

        } catch(error) {

            return rejectWithValue(error.message);

        }
    }
)

const initialState = {
    isRegisterUserLoading: false,
    registerUserData: false,
    isRegisterUserError: false,
}

export const registerUserReducer = createSlice({
    name: "registerUserReducer",
    initialState,
    extraReducers: (reducersResult) => {
        reducersResult.addCase(registerUserAction.pending, (state) => {
            state.isRegisterUserLoading = true;
        })
        reducersResult.addCase(registerUserAction.fulfilled, (state, action) => {
            state.isRegisterUserLoading = false;
            state.registerUserData = action.payload;
        })
        reducersResult.addCase(registerUserAction.rejected, (state, action) => {
            state.isRegisterUserLoading = false;
            state.registerUserData = false;
            state.isRegisterUserError = action.payload;
        })
    }
})

export default registerUserReducer.reducer;