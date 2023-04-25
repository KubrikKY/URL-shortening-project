import {
  GET_SHORT_URL,
  SET_URL,
  SET_SHORT_URL,
  ERROR,
} from '../constant/constantShortAction';
import type {
  setUrlActionType,
  getShortUrlType,
  IShortLinkData,
  setShortUrlType,
  errorGetShortUrlType,
  IShortLinkError,
} from '../types/Types';

export const setURLAction = (payload: string): setUrlActionType => ({
  type: SET_URL,
  payload,
});

export const getURLAction = (): getShortUrlType => ({
  type: GET_SHORT_URL,
});

export const setShortURLAction = (
  payload: IShortLinkData
): setShortUrlType => ({
  type: SET_SHORT_URL,
  payload,
});

export const errorGetShortURLAction = (
  payload: IShortLinkError
): errorGetShortUrlType => ({
  type: ERROR,
  payload,
});
