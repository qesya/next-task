/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import TextInput from '../TextInput';

const props = {
	value: 'example value',
	onChange: jest.fn(),
};

describe('<Container />', () => {
	test('should render label', () => {
		const label = 'example';

		const { getByTestId } = render(<TextInput label={label} {...props} />);
		expect(getByTestId('textinput-label')).toBeInTheDocument();
	});

	test('should not render label', () => {
		const { queryByTestId } = render(<TextInput {...props} />);
		expect(queryByTestId(`textinput-label`)).not.toBeInTheDocument();
	});

	test('should have match value', () => {
		const { getByTestId } = render(<TextInput {...props} />);

		const input = getByTestId('textinput');

		expect(input).toBeInTheDocument();
		expect(input).toHaveValue('example value');
	});
});
