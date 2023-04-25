import { useDispatch, useSelector } from 'react-redux';
import './InputForURL.scss';
import type { rootStore } from '../../store';
import { setURLAction, getURLAction } from '../../store/actions/actionsShort';
import { ChangeEvent, FormEvent } from 'react';

const InputForURL = () => {
  const URL = useSelector((state: rootStore) => state.reducerShortUrl.URL);

  const dispatch = useDispatch();

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
          />
          <button type="submit">Shorten It!</button>
        </label>
      </form>
    </div>
  );
};

export default InputForURL;
