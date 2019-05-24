import React from 'react';
import { storiesOf } from '@storybook/react';

import Maps from './Maps';

const DEFAULT_ADDRESS = {
  logradouro: 'Rua Natividade da Serra',
  bairro: 'Chácara da Barra',
  localidade: 'Campinas',
  uf: 'SP',
};

storiesOf('Maps', module).add('default', () => <Maps address={DEFAULT_ADDRESS} />);
