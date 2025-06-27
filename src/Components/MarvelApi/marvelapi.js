import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const marvelapi = createAsyncThunk(
    "marveapi",
    async (value, { rejectWithValue }) => {
        try{
            const response = await fetch(`https://reqres.in/api/users?page=${value}`);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    listofemployeesloading: true,
    listofemployeesdata: [],
    listofemployeeserror: null,
}

export const marvelapiReducer = createSlice({
    name: "marvelapiReducer",
    initialState,
    reducers: {
        marvelapiReset: (state) => {
            state.listofemployeesloading = initialState.listofemployeesloading;
            state.listofemployeesdata = initialState.listofemployeesdata;
            state.listofemployeeserror = initialState.listofemployeeserror;
        }
    },
    extraReducers: (reducersResult) => {
        reducersResult.addCase(marvelapi.pending, (state) => {
            state.listofemployeesloading = true;
        })
        reducersResult.addCase(marvelapi.fulfilled, (state, action) => {
            state.listofemployeesloading = false;
            state.listofemployeesdata = action?.payload;
        })
        reducersResult.addCase(marvelapi.rejected, (state) => {
            state.listofemployeesloading = false;
            state.listofemployeesdata = false;
            state.listofemployeeserror = true;
        })
    }
})

export const { marvelapiReset } = marvelapiReducer.actions;

export default marvelapiReducer.reducer;