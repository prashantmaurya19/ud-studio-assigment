import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "no search",
    search_result: null,
};

export const searchBannerSlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setSearchResult(state, action) {
      state.search_result = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {setQuery,setSearchResult} = searchBannerSlice.actions;

export const searchBannerSliceReducer = searchBannerSlice.reducer;
