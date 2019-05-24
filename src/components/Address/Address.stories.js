import React from 'react';
import { storiesOf } from '@storybook/react';

import Address from './Address';
import Close from '../Close';

const DEFAULT_ADDRESS = {
  cep: '13090-762',
  logradouro: 'Rua Natividade da Serra',
  complemento: '',
  bairro: 'Chácara da Barra',
  localidade: 'Campinas',
  uf: 'SP',
  unidade: '',
  ibge: '3509502',
  gia: '2446',
};

storiesOf('Address', module)
  .addDecorator((s) => <div style={{ width: '80%' }}>{s()}</div>)
  .add('default', () => <Address address={DEFAULT_ADDRESS} />)
  .add('closeable', () => (
    <Close>
      <Address address={DEFAULT_ADDRESS} />
    </Close>
  ));
