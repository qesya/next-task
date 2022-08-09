import {
	FETCH_DATA_ERROR,
	FETCH_DATA_LOADING,
	FETCH_DATA_SUCCESS,
	SET_KEYWORD,
	SET_LIMIT,
} from './constants';
import { ActionData, DataState } from './types';


const initialState: DataState = {
	keyword: '',
	limit: 10,
	data: null,
	loading: false,
	error: false,
};

const searchReducer = (state = initialState, action: ActionData) => {
	switch (action.type) {
		case SET_KEYWORD:
			return {
				...state,
				keyword: action.payload,
			};
		case SET_LIMIT:
			return {
				...state,
				limit: action.payload,
			};
		case FETCH_DATA_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case FETCH_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

export default searchReducer;
