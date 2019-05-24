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
      width="732"
      height="400"
      src={`https://maps.google.com/maps?q=${query}&output=embed`}
      frameBorder="0"
      scrolling="no"
      aria-label={`Google Maps ${query}`}
      className="google-maps"
      data-testid="google-maps"
    />
  );
};

Maps.propTypes = {
  address: PropTypes.shape({
    logradouro: PropTypes.string,
    bairro: PropTypes.string,
    localidade: PropTypes.string,
    uf: PropTypes.string,
  }),
};

export default Maps;
