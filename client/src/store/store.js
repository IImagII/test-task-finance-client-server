import { configureStore } from '@reduxjs/toolkit'

import spaceReducer from './slice/spaceSlice'

export const store = configureStore({
  reducer: {
    space: spaceReducer
  }
})
