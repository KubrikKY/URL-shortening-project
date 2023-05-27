import { configureStore } from '@reduxjs/toolkit';
import shortUrlReducer from './reducer/shortUrlReducer';
import createSagaMiddleware from '@redux-saga/core';
import { shortUrlWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    shortUrl: shortUrlReducer,
  },
  middleware: (getDefault) => {
    return getDefault().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(shortUrlWatcher);

export type DispatchType = typeof store.dispatch;
export type rootStore = ReturnType<typeof store.getState>;
