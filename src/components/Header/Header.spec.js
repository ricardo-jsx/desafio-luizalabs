import React from 'react';
import { render } from 'react-testing-library';

import Header from './Header';

describe('Header', () => {
  it('should render with title and content', () => {
    const { getByText } = render(
      <Header title="Title">
        <div>Content</div>
      </Header>
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });
});
