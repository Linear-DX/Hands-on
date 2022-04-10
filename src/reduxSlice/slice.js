import { createSlice } from "@reduxjs/toolkit";

export const keySlice = createSlice({
    name: "keywords",
    initialState: {
        value: ''
    },
    reducers: {
        setQuery: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setQuery } = keySlice.actions;
export default keySlice.reducer;