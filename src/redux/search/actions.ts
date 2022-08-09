import { Dispatch } from 'redux';
import { RootState } from '../store';
import {
	FETCH_DATA_ERROR,
	FETCH_DATA_LOADING,
	FETCH_DATA_SUCCESS,
	SET_KEYWORD,
	SET_LIMIT,
} from './constants';
import { DataDispatchTypes } from './types';

const apiBaseUrl = 'https://itunes.apple.com/search';

export const setKeyword = (payload: string) => ({ type: SET_KEYWORD, payload });

export const fetchData =
	(limit = 10) => async (dispatch: Dispatch<DataDispatchTypes>, getState: () => RootState) => {
		const { keyword } = getState().search;
		try {
			dispatch({ type: FETCH_DATA_LOADING });

			const raw = await fetch(
				`${apiBaseUrl}?term=${encodeURIComponent(keyword)}&media=music&limit=${limit}`
			);
			const { results } = await raw.json();
			dispatch({ type: SET_LIMIT, payload: limit });
			dispatch({ type: FETCH_DATA_SUCCESS, payload: results });
		} catch (e) {
			dispatch({ type: FETCH_DATA_ERROR });
		}
	};
