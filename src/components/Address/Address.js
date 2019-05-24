import React from 'react';
import PropTypes from 'prop-types';

import { AddressContainer, Street } from './Address.styled';

const Address = ({ address }) => (
  <AddressContainer>
    <Street data-testid="street">{address.logradouro}</Street>
    <p data-testid="district">{address.bairro}</p>
    <p data-testid="city">
      {address.localidade} - {address.uf}
    </p>
    <p data-testid="cep">{address.cep}</p>
  </AddressContainer>
);

Address.propTypes = {
  address: PropTypes.shape({
    logradouro: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    localidade: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
  }),
};

export default Address;
