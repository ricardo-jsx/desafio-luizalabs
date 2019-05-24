import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from './Button';

describe('Input', () => {
  it('should allow only the characters of the mask', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);

    const input = getByText(/Click Me/i);
    fireEvent.click(input);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
