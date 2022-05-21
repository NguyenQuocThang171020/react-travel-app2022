import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import userSlice from '../redux/userSlice'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import tourSlice  from './tourSlice';
import hotelSlice from './hotelSlice';
import ticketSlice from './ticketSlice'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    stateReconciler: autoMergeLevel2
  }
  const rootReducer = combineReducers({
    user:userSlice,
    tour:tourSlice,
    hotel:hotelSlice,
    ticket:ticketSlice
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  export let persistor = persistStore(store)  