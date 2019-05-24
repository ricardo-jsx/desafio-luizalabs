import React from 'react';
import { render } from 'react-testing-library';
import Loader from './Loader';

describe('Loader', () => {
  it('should render content', () => {
    const renderLoading = jest.fn();
    const { getByText } = render(
      <Loader renderLoading={renderLoading}>
        <p>Content</p>
      </Loader>
    );

    expect(getByText('Content')).toBeInTheDocument();
    expect(renderLoading).not.toHaveBeenCalled();
  });

  it('should render the loader', () => {
    const renderLoading = jest.fn(() => <p>Loader</p>);
    const { getByText, queryByTestId } = render(
      <Loader renderLoading={renderLoading} loading>
        <p data-testid="content">Content</p>
      </Loader>
    );

    expect(queryByTestId('content')).toBeNull();
    expect(getByText('Loader')).toBeInTheDocument();
    expect(renderLoading).toHaveBeenCalled();
  });
});
