import styled from 'styled-components';


interface Props {
	width?: string;
	height?: string;
}

const Item = styled.div<Props>`
	display: flex;
	
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : 'auto')};
	margin: 10px;
	padding: 20px;
	border: 1px solid #e3e3e3;
	border-radius: 8px;
	transition: all 0.4s ease-out;

	& > div:nth-child(2) {
		margin-left: 20px;
	}

	&:hover {
		box-shadow: 0px 4px 8px #e9e9e9;
		background-color: #f6f6f6;
		transition: all 0.4s ease-out;
	}
`;

export default Item;
