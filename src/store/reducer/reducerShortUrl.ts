import type { IStateResShortURL, ActionsType } from '../types/Types';
import { SET_URL, SET_SHORT_URL, ERROR } from '../constant/constantShortAction';

const defaultState: IStateResShortURL = {
  URL: '',
  ListShortURL: [],
};

export const reducerShortUrl = (state = defaultState, action: ActionsType) => {
  switch (action.type) {
    case SET_URL:
      return { ...state, URL: action.payload };
    case SET_SHORT_URL:
      return {
        ...state,
        ListShortURL: [...state.ListShortURL, action.payload],
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
