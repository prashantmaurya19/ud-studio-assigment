import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: [] // array of selected images links
};

export const selectedImageSlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        pushSelect(state, action) {
            state.selected.push(action.payload);
        },
        pushAndPopSelect(state, action) {
            if (state.selected.includes(action.payload)) {
                state.selected = state.selected.filter(item => item !== action.payload);
            } else {
                state.selected.push(action.payload);
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const { pushAndPopSelect } = selectedImageSlice.actions;

export const selectedImageSliceReducer = selectedImageSlice.reducer;
