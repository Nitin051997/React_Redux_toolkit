import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        addNumber: (state) => {
            state.value += 1;
        },
        subNumber: (state) => {
            state.value -= 1;
        }
    },
})

export const { addNumber, subNumber } = counterSlice.actions;

export default counterSlice.reducer;