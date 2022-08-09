import styled from 'styled-components';

const Text = styled.p<{ fontSize?: string; bold?: boolean; }>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
	${({ bold }) => bold && 'font-weight: bold;'}
  margin: 5px;
`;

export default Text;
