export interface IStateResShortURL {
  URL: string;
  ListShortURL: IShortLinkData[];
  error: IShortLinkError | null;
}

export interface IShortLinkError {
  ok: boolean;
  error_code: number;
  error: string;
}

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

export type ResponceType = IShortLinkResponce | IShortLinkError;
