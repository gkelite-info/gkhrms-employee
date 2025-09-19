import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist"
import { combineReducers } from "redux"
import authReducer from "../features/auth/slice/loginSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // ✅ persist only auth slice
}

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
