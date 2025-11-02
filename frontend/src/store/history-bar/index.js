//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

export const historyBarSlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory(state, action) {
      state.history = [];
      for (const his of action.payload) {
        for (const createdOn of his.createdOn) {
          state.history.push({
            query: his.query,
            createdOn,
          });
        }
      }
      state.history.sort(
        (a, b) => new Date(b.createdOn) - new Date(a.createdOn),
      );
    },
    pushHistory(state, action) {
      state.history.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, pushHistory } = historyBarSlice.actions;

export const historyBarSliceReducer = historyBarSlice.reducer;
