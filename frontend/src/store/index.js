import { configureStore } from '@reduxjs/toolkit'
import { historyBarSliceReducer } from './history-bar'
import { searchBannerSliceReducer } from './search-info'

export const store = configureStore({
  reducer: {
    historyBar: historyBarSliceReducer,
    searchInfo: searchBannerSliceReducer,
  },
})
