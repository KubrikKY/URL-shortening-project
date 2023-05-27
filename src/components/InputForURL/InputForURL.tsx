import { useAppDispatch, useAppSelector } from '../../store/hook/hooksRedux';
import './InputForURL.scss';
import {
  setURLAction,
  getURLAction,
} from '../../store/reducer/shortUrlReducer';

import { ChangeEvent, FormEvent } from 'react';

const InputForURL = () => {
  const [URL, error] = useAppSelector((state) => [
    state.shortUrl.URL,
    state.shortUrl.error?.error,
  ]);

  const dispatch = useAppDispatch();

  const setUrlHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setURLAction(event.target.value));
  };

  const getUrlHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(getURLAction());
  };

  return (
    <div className="InputForURL">
      <form onSubmit={getUrlHandler}>
        <label>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={URL}
            onChange={setUrlHandler}
            className="shortUrlInput"
          />
          <button type="submit">Shorten It!</button>
        </label>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

export default InputForURL;
