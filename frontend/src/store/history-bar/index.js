//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  index:{},
};

export const historyBarSlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory(state, action) {
      state.history = action.payload.sort(
        (a, b) => new Date(b.createdOn) - new Date(a.createdOn),
      );
      state.index = {};
      state.history.forEach((item, idx) => {
        state.index[item.query] = idx;
      });
    },
    pushHistory(state, action) {
      console.log(state.index,state.index[action.payload.query]);
      if (state.index[action.payload.query]==undefined) state.history.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, pushHistory } = historyBarSlice.actions;

export const historyBarSliceReducer = historyBarSlice.reducer;
