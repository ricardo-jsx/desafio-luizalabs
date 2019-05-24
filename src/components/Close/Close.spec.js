import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Close from './Close';
import { isDebuggerStatement } from '@babel/types';

describe('Close', () => {
  it('should be possible to hide everything inside it', () => {
    const { queryByTestId, getByRole } = render(
      <div>
        <Close>
          <div data-testid="children">Children</div>
        </Close>
        <div data-testid="not-children">Not Children</div>
      </div>
    );

    expect(queryByTestId('children')).toBeInTheDocument();
    fireEvent.click(getByRole('img'));
    expect(queryByTestId('children')).not.toBeInTheDocument();
    expect(queryByTestId('not-children')).toBeInTheDocument();
  });
});
