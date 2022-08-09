import { fetchData } from '../redux/search/actions';
import { useThunkDispatch } from '../redux/hook';

const useSearchApi = () => {
	const dispatch = useThunkDispatch();
	const fetchSearchApi = (limit = 10) => dispatch(fetchData(limit));

	return {
		fetchSearchApi,
	};
};

export default useSearchApi;
