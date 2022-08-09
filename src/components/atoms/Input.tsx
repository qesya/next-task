import styled from 'styled-components';


const Input = styled.input`
	width: 100%;
	padding: 10px 15px;
	outline: 2px solid #e3e3e3;
	border: none;
	border-radius: 4px;
	transition: outline .4s ease-out;
	
	&:focus {
		outline-color: #6184e3;
		transition: outline .4s ease-out;
  }
`;

export default Input;
