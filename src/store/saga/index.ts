import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_SHORT_URL } from '../reducer/shortUrlReducer';
import { getShortlURLFromApi } from '../../api/getShortAPI';
import {
  setShortURLAction,
  errorGetShortURLAction,
} from '../reducer/shortUrlReducer';
import type { IShortLinkResponce, IShortLinkError } from '../types/Types';
import type { rootStore } from '../index';

function isDataSuccess(
  data: IShortLinkResponce | IShortLinkError
): data is IShortLinkResponce {
  return data.ok;
}

function* getShortlURL() {
  const url = select((state: rootStore) => state.shortUrl.URL);
  const urlString: string = yield url;
  const data = getShortlURLFromApi<IShortLinkResponce | IShortLinkError>(
    urlString
  );
  const resultData: IShortLinkResponce | IShortLinkError = yield data;
  if (isDataSuccess(resultData)) {
    yield put(setShortURLAction(resultData.result));
  } else {
    yield put(errorGetShortURLAction(resultData));
  }
}

export function* shortUrlWatcher() {
  yield takeLatest(GET_SHORT_URL, getShortlURL);
}
