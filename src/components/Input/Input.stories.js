import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';

storiesOf('Input', module).add('with cep mask', () => (
  <Input label="CEP" mask="11111-111" onChange={action('onChange')} />
));
