import type { rootStore, DispatchType } from '../index';

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<rootStore> = useSelector;
export const useAppDispatch = () => useDispatch<DispatchType>();
