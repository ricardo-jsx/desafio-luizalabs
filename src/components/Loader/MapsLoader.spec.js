import React from 'react';
import { render } from 'react-testing-library';
import MapsLoader from './MapsLoader';

describe('Loader/MapsLoader', () => {
  it('should render the loader on big screens', () => {
    global.matchMedia = () => ({
      addListener: () => {},
      removeListener: () => {},
      matches: true,
    });

    const { getByTestId } = render(<MapsLoader />);
    expect(getByTestId('maps-rect')).toBeInTheDocument();
  });

  it('should render fallback loader on small screens', () => {
    global.matchMedia = () => ({
      addListener: () => {},
      removeListener: () => {},
      matches: false,
    });

    const { getByText, queryByTestId } = render(<MapsLoader />);
    expect(getByText('The map is loading...')).toBeInTheDocument();
    expect(queryByTestId('maps-rect')).toBeNull();
  });
});
