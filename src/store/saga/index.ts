import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_SHORT_URL } from '../reducer/shortUrlReducer';
import { getShortlURLFromApi } from '../../api/getShortAPI';
import {
  setShortURLAction,
  errorGetShortURLAction,
} from '../reducer/shortUrlReducer';
import type { IShortLinkResponce, ResponceType } from '../types/Types';
import type { rootStore } from '../index';

function isDataSuccess(data: ResponceType): data is IShortLinkResponce {
  return data.ok;
}

function* getShortlURL() {
  const url = select((state: rootStore) => state.shortUrl.URL);
  const urlString: string = yield url;
  const data = call(() => getShortlURLFromApi<ResponceType>(urlString));
  const resultData: ResponceType = yield data;
  if (isDataSuccess(resultData)) {
    yield put(setShortURLAction(resultData.result));
  } else {
    yield put(errorGetShortURLAction(resultData));
  }
}

export function* shortUrlWatcher() {
  yield takeLatest(GET_SHORT_URL, getShortlURL);
}
