import { configureStore } from '@reduxjs/toolkit'
import { historyBarSliceReducer } from './history-bar'
import { searchBannerSliceReducer } from './search-info'
import { selectedImageSliceReducer } from './selected-image'

export const store = configureStore({
  reducer: {
    historyBar: historyBarSliceReducer,
    searchInfo: searchBannerSliceReducer,
    selectedImage: selectedImageSliceReducer,
  },
})
