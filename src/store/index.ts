import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducerShortUrl } from './reducer/reducerShortUrl';
import createSagaMiddleware from '@redux-saga/core';
import { shortUrlWatcher } from './saga';

const rootReducer = combineReducers({
  reducerShortUrl,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => {
    return getDefault().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(shortUrlWatcher);

export type rootStore = ReturnType<typeof rootReducer>;
