import {
	FETCH_DATA_ERROR,
	FETCH_DATA_LOADING,
	FETCH_DATA_SUCCESS,
	SET_KEYWORD,
	SET_LIMIT,
} from './constants';


export interface DataState {
	keyword: string;
	limit: number;
	data: Data[] | null;
	loading: boolean;
	error: boolean;
}

export interface Data {
	artistId: number;
	kind: string;
	artistName: string;
	previewUrl: string;
	artworkUrl100: string;
	trackName: string;
}

export type ActionData = {
	type: string;
	payload: Data[] | string | number;
};

export interface SetKeyword {
	type: typeof SET_KEYWORD;
	payload: string;
}

export interface SetLimit {
	type: typeof SET_LIMIT;
	payload: number;
}

export interface DataLoading {
	type: typeof FETCH_DATA_LOADING;
}

export interface DataSuccess {
	type: typeof FETCH_DATA_SUCCESS;
	payload: Data[];
}

export interface DataError {
	type: typeof FETCH_DATA_ERROR;
}

export type DataDispatchTypes =
	| SetKeyword
	| SetLimit
	| DataLoading
	| DataSuccess
	| DataError;
