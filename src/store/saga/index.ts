import { takeEvery, put, select } from 'redux-saga/effects';
import { GET_SHORT_URL } from '../constant/constantShortAction';
import { getShortlURLFromApi } from '../../api/getShortAPI';
import {
  setShortURLAction,
  errorGetShortURLAction,
} from '../actions/actionsShort';
import type { IShortLinkResponce, IShortLinkError } from '../types/Types';
import type { rootStore } from '..';

function isDataSuccess(
  data: IShortLinkResponce | IShortLinkError
): data is IShortLinkResponce {
  return data.ok;
}

function* getShortlURL() {
  const url = select((state: rootStore) => state.reducerShortUrl.URL);
  const urlString: string = yield url;
  const data: IShortLinkResponce | IShortLinkError = yield getShortlURLFromApi(
    urlString
  );
  if (isDataSuccess(data)) {
    yield put(setShortURLAction(data.result));
  } else {
    yield put(errorGetShortURLAction(data));
  }
}

export function* shortUrlWatcher() {
  yield takeEvery(GET_SHORT_URL, getShortlURL);
}
