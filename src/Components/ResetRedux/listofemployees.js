import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const listofemployees = createAsyncThunk(
    "listofemployees",
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


export const listofemployeesReducer = createSlice({
    name: "listofemployeesReducer",
    initialState,
    reducers: {
        reset: (state) => {
            state.listofemployeesloading = initialState.listofemployeesloading;
            state.listofemployeesdata = initialState.listofemployeesdata;
            state.listofemployeeserror = initialState.listofemployeeserror;
        }
    },
    extraReducers: (reducersResult) => {
        reducersResult.addCase(listofemployees.pending, (state) => {
            state.listofemployeesloading = true;
        })
        reducersResult.addCase(listofemployees.fulfilled, (state, action) => {
            state.listofemployeesloading = false;
            state.listofemployeesdata = action?.payload;
        })
        reducersResult.addCase(listofemployees.rejected, (state) => {
            state.listofemployeesloading = false;
            state.listofemployeesdata = false;
            state.listofemployeeserror = true;
        })
    }
})

export const { reset } = listofemployeesReducer.actions;

export default listofemployeesReducer.reducer;