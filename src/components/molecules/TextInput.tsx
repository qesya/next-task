import React, { ChangeEventHandler } from 'react';

import Container from '../atoms/Container';
import Input from '../atoms/Input';


interface Props {
	label?: string;
	placeholder?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({ label, ...props }) => (
	<Container column>
		{label && <label data-testid="textinput-label">{label}</label>}
		<Input data-testid="textinput" type="text" name={label} {...props} />
	</Container>
);

export default TextInput;
