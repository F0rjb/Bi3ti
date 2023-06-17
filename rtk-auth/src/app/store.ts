import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { authApi } from "../components/services/authApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import authReducer from "../features/authSlice"

export const store = configureStore({
  reducer: { auth: authReducer, [authApi.reducerPath]: authApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
