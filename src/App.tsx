import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import { AppGlobalStyle } from './styles/global';
import Container from './components/atoms/Container';
import ResultList from './components/molecules/ResultList';
import SearchForm from './components/organisms/SearchForm';


function App() {

	return (
		<Provider store={store}>
			<Container column>
				<AppGlobalStyle />
				<SearchForm />
				<ResultList />
			</Container>
		</Provider>
	);
}

export default App;
