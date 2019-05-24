import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Address from './Address';

const DEFAULT_ADDRESS = {
  cep: '13090-762',
  logradouro: 'Rua Natividade da Serra',
  bairro: 'Chácara da Barra',
  localidade: 'Campinas',
  uf: 'SP',
};

describe('Address', () => {
  it('should render the address details', () => {
    const { getByTestId } = render(<Address address={DEFAULT_ADDRESS} />);

    expect(getByTestId('street').textContent).toBe('Rua Natividade da Serra');
    expect(getByTestId('district').textContent).toBe('Chácara da Barra');
    expect(getByTestId('city').textContent).toBe('Campinas - SP');
    expect(getByTestId('cep').textContent).toBe('13090-762');
  });
});
