// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const AbortApiAction = createAsyncThunk(
//     "AbortApiAction",
//     async(_, { signal, rejectWithValue }) => {
//         try {
//             const response = await fetch(`https://reqres.in/api/users?delay=5`, { signal });
//             if(!response.ok){
//                 throw new Error("Network Error!!")
//             }
//             const data = await response.json();
//             return data;
//         } catch(error) {
//             if (error.name === 'AbortError') {
//                 console.log('Fetch aborted');
//                 return rejectWithValue('Request canceled');
//               }
//             return rejectWithValue(error.message);
//         }
//     }
// )

// const initialState = {
//     AbortApiActionLoading: true,
//     AbortApiActionData: false,
//     AbortApiActionError: false,
// }

// export const AbortActionReducer = createSlice({
//     name: "AbortApiActionReducer",
//     initialState,
//     extraReducers: (reducerResult) => {
//         reducerResult.addCase(AbortApiAction.pending, (state) => {
//             state.AbortApiActionLoading = true;
//         })
//         reducerResult.addCase(AbortApiAction.fulfilled, (state, action) => {
//             state.AbortApiActionLoading = false;
//             state.AbortApiActionData = action.payload;
//         })
//         reducerResult.addCase(AbortApiAction.rejected, (state, action) => {
//             state.AbortApiActionLoading = false;
//             state.AbortApiActionData = false;
//             state.AbortApiActionError = action.payload;
//         })
//     }
// })

// export default AbortActionReducer.reducer;