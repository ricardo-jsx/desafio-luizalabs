import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';

import Input from './Input';

describe('Input', () => {
  it('should allow only the characters of the mask', async () => {
    const onChange = jest.fn();
    const { getByLabelText, getByDisplayValue } = render(<Input id="input" mask="111" onChange={onChange} />);

    const input = getByLabelText(/input/i);
    fireEvent.change(input, { target: { value: '123a' } });
    expect(onChange).toHaveBeenCalledWith('123');
  });
});
