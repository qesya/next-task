import styled from 'styled-components';


interface Props {
	column?: boolean;
	padding?: number | string;
	justifyContent?: string;
	alignItems?: string;
	flexWrap?: string;
	borderTop?: boolean;
	borderBottom?: boolean;
	full?: boolean;
}

const Container = styled.div<Props>`
	display: flex;
	flex: 1;
	${({ column }) => column && `flex-direction: column;`}
	${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
	${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
	${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
	${({ padding }) => padding && `padding: ${padding};`}
	${({ full }) => full && `width: 100%;`}
`;

export default Container;
