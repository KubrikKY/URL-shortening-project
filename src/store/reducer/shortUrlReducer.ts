import type {
  IStateResShortURL,
  IShortLinkData,
  IShortLinkError,
} from '../types/Types';
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

const initialState: IStateResShortURL = {
  URL: '',
  ListShortURL: [],
  error: null,
};

const shortUrlSlice = createSlice({
  name: 'shortUrl',
  initialState,
  reducers: {
    setURLAction(state, action: PayloadAction<string>) {
      state.URL = action.payload;
    },

    setShortURLAction(state, action: PayloadAction<IShortLinkData>) {
      state.error = null;
      state.ListShortURL.push(action.payload);
    },

    errorGetShortURLAction(state, action: PayloadAction<IShortLinkError>) {
      state.error = action.payload;
    },
  },
});

export const { setURLAction, setShortURLAction, errorGetShortURLAction } =
  shortUrlSlice.actions;

export const GET_SHORT_URL = 'shortUrl/fetch';
export const getURLAction = createAction(GET_SHORT_URL);
export default shortUrlSlice.reducer;
