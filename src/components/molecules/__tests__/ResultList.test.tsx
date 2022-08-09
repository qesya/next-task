/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import ResultList from '../ResultList';

const mockStore = configureMockStore([thunk]);

describe('<Container />', () => {

  test('should not render anything', () => {
		const store = mockStore({
			search: {
				data: null,
			},
		});
		const { queryByTestId } = render(
			<Provider store={store}>
				<ResultList />
			</Provider>
		);
		expect(queryByTestId('resultlist-container')).not.toBeInTheDocument();
	});

	test('should render list', () => {
		const store = mockStore({
			search: {
				data: [
          {
            artistName: 'singer name',
            artworkUrl100: 'https://test',
            trackName: 'song title'
          }
        ],
			},
		});
		const { getByText } = render(
			<Provider store={store}>
				<ResultList />
			</Provider>
		);
		expect(getByText('singer name')).toBeInTheDocument();
	});

  test('should render no result', () => {
		const store = mockStore({
			search: {
				data: [],
			},
		});
		const { getByText } = render(
			<Provider store={store}>
				<ResultList />
			</Provider>
		);
		expect(getByText('There are no results.')).toBeInTheDocument();
	});
});
