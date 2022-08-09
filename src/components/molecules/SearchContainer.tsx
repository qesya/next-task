import styled from 'styled-components';

import Container from '../atoms/Container';


const SearchContainer = styled(Container).attrs({
	column: true,
	padding: '40px 10px',
	alignItems: 'center',
})`
	position: sticky;
	top: 0;
	background-color: #f1f3f4;

	& input {
		flex: 1;
		max-width: 500px;
	}
`;

export default SearchContainer;
