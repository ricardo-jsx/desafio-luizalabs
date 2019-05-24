import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Input from '../Input';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('click')}>Buscar</Button>)
  .add('inside form', () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="CEP" mask="11111-111" onChange={action('onChange')} />
      <Button type="submit" onClick={action('submit')} style={{ marginLeft: '8px' }}>
        Buscar
      </Button>
    </form>
  ));
