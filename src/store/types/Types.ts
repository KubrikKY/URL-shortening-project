import {
  GET_SHORT_URL,
  SET_URL,
  SET_SHORT_URL,
  ERROR,
} from '../constant/constantShortAction';

export interface IStateResShortURL {
  URL: string;
  ListShortURL: IShortLinkData[];
  error?: IShortLinkError;
}

//////////////////////////////////////////////////

export interface IShortLinkError {
  ok: boolean;
  error_code: number;
  error: string;
}

//////////////////////////////////////////////////
export interface IShortLinkData {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface IShortLinkResponce {
  ok: boolean;
  result: IShortLinkData;
}

export type setUrlActionType = {
  type: typeof SET_URL;
  payload: string;
};

export type getShortUrlType = {
  type: typeof GET_SHORT_URL;
};

export type setShortUrlType = {
  type: typeof SET_SHORT_URL;
  payload: IShortLinkData;
};

export type errorGetShortUrlType = {
  type: typeof ERROR;
  payload: IShortLinkError;
};

export type ActionsType =
  | setUrlActionType
  | setShortUrlType
  | errorGetShortUrlType;
