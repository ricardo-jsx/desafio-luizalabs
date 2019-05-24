import React from 'react';
import { render } from 'react-testing-library';
import Maps from './Maps';

const DEFAULT_ADDRESS = {
  logradouro: 'Rua Natividade da Serra',
  bairro: 'Chácara da Barra',
  localidade: 'Campinas',
  uf: 'SP',
};

describe('Maps', () => {
  it('should render with correct location', () => {
    const expectedSrc =
      'https://maps.google.com/maps?q=Rua Natividade da Serra, Chácara da Barra, Campinas-SP&output=embed';
    const { getByTestId } = render(<Maps address={DEFAULT_ADDRESS} />);

    expect(getByTestId('google-maps')).toHaveAttribute('src', expectedSrc);
  });
});
