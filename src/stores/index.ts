import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { reducer as shopsSlice } from './shopsSlice';
import { reducer as productsSlice } from './productsSlice';

export const store = configureStore({ reducer: { shopsSlice, productsSlice } });

export type State = ReturnType<typeof store.getState>;

export const useAppSelector = <ResponseType>(callback: (state: State) => ResponseType) => useSelector<State, ResponseType>(callback);