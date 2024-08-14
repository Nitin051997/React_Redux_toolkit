import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const createUserAction = createAsyncThunk(
    "createUserAction",
    async (value, {rejectWithValue}) => {
        let apiRequest = {
            "method": "POST",
            "header": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "name": value?.name,
                "job": value?.role,
            })
        }

        try {

            const response = await fetch(`https://reqres.in/api/users`, apiRequest);

            if(!response.ok){
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
    
        } catch(error) {

            return rejectWithValue(error.message);

        }
    }
)

const initialState = {
    isCreateUserLoading: false,
    createUserData: false,
    isCreateUserError: false,
}

export const createUserReducer = createSlice({
    name: "createUserReducer",
    initialState,
    extraReducers: (reducersResult) => {
        reducersResult.addCase(createUserAction.pending, (state) => {
            state.isCreateUserLoading = true;
        })
        reducersResult.addCase(createUserAction.fulfilled, (state, action) => {
            state.isCreateUserLoading = false;
            state.createUserData = action.payload;
        })
        reducersResult.addCase(createUserAction.rejected, (state, action) => {
            state.isCreateUserLoading = false;
            state.createUserData = false;
            state.isCreateUserError = action.payload;
        })
    }
})

export default createUserReducer.reducer;