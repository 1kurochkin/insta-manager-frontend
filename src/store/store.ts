import { configureStore } from '@reduxjs/toolkit'
import {apiReducer} from "./reducers/api/api.reducer";

export const store = configureStore({
  reducer: {
    api: apiReducer.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch