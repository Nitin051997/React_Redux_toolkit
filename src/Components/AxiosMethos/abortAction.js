import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let isCanceled = false; // Global flag to track cancellation

export const AbortApiAction = createAsyncThunk(
  "AbortApiAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?delay=5`);
      if (!response.ok) {
        throw new Error("Network Error!!");
      }

      const data = await response.json();

      // Check if the request was canceled before resolving
      if (isCanceled) {
        return rejectWithValue('Request was canceled');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const abortActionSlice = createSlice({
  name: "abortActionSlice",
  initialState,
  reducers: {
    cancelRequest(state) {
      // Set a flag that indicates the request has been canceled
      isCanceled = true;
      state.loading = false;
      state.error = "Request was canceled"; // Optional: show cancel message
    },
    resetCancelFlag() {
      isCanceled = false; // Reset the flag when starting a new request
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AbortApiAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    builder.addCase(AbortApiAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
    builder.addCase(AbortApiAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { cancelRequest, resetCancelFlag } = abortActionSlice.actions;

export default abortActionSlice.reducer;
