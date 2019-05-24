import React from 'react';
import PropTypes from 'prop-types';

const Maps = ({ address }) => {
  const { logradouro, bairro, localidade, uf } = address;
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const query = `${logradouro}, ${bairro}, ${localidade}-${uf}`;
    setQuery(query);
  }, [address]);

  return (
    <iframe
      width="500"
      height="300"
      src={`https://maps.google.com/maps?q=${query}&output=embed`}
      frameBorder="0"
      scrolling="no"
      aria-label={`Google Maps ${query}`}
      data-testid="google-maps"
    />
  );
};

Maps.propTypes = {
  address: PropTypes.shape({
    logradouro: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    localidade: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
  }),
};

export default Maps;
