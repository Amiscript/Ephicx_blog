import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import persistStore from 'redux-persist/es/persistStore'

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: localStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for demonstration purposes
    }),
});

export const persistor = persistStore(store);