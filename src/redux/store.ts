import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ThunkAction } from 'redux-thunk';

import { PersistConfig } from 'redux-persist/es/types';
import rootReducer, { RootState } from './rootReducer';

/**
 * redux-persist config
 * @see https://github.com/rt2zz/redux-persist
 */
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * RTK store config
 * @see https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // If using Redux-Persist, you should specifically ignore all the action types it dispatches
      // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

/**
 * @description By using the module.hot API for reloading, we can re-import the new version of the root reducer function
 * whenever it's been recompiled, and tell the store to use the new version instead.
 * @see https://webpack.js.org/concepts/hot-module-replacement/
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => store.replaceReducer(persistedReducer));
}

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
