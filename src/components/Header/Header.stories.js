import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import Button from '../Button';
import Input from '../Input';

storiesOf('Header', module)
  .add('only with title', () => <Header title="Consultar" />)
  .add('with children', () => (
    <Header title="Consultar">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="CEP" mask="11111-111" onChange={action('onChange')} />
        <Button type="submit" onClick={action('submit')} style={{ marginLeft: '8px' }}>
          Buscar
        </Button>
      </form>
    </Header>
  ));
