//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "no search",
  search_result: null,
  results: [],
  curr_page: -1,
};

export const searchBannerSlice = createSlice({
  name: "searchBanner",
  initialState,
  reducers: {
    setSearchResult(state, action) {
      console.log("in slice", action.payload);
      state.search_result = action.payload;
      state.results = action.payload.results;
      state.curr_page = 0;
    },
    concatSearchResult(state, action) {
      state.search_result = action.payload;
      state.results = state.results.concat(action.payload.results);
      console.log("in slice concat", state.results);
      state.curr_page++;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery, concatSearchResult, setSearchResult } =
  searchBannerSlice.actions;

export const searchBannerSliceReducer = searchBannerSlice.reducer;
