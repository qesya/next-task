import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';
import useSearchApi from '../../hooks/useSearchApi';

import SearchContainer from '../molecules/SearchContainer';
import Input from '../atoms/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setKeyword } from '../../redux/search/actions';


const SearchForm: React.FC = () => {
  const { fetchSearchApi } = useSearchApi();
	const dispatch = useAppDispatch();
	const { keyword } = useAppSelector(state => state.search);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setKeyword(e.target.value));
	}, [dispatch]);

  const handleSearchChange = useCallback(async (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && keyword !== '') {
      fetchSearchApi();
    }
	}, [fetchSearchApi, keyword]);

	return (
		<SearchContainer>
			<Input
				placeholder="Search"
				value={keyword}
				onChange={handleChange}
        onKeyDown={handleSearchChange}
			/>
		</SearchContainer>
	);
};

export default SearchForm;
