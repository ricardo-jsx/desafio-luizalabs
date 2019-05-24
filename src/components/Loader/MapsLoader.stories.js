import React from 'react';
import { storiesOf } from '@storybook/react';

import MapsLoader from './MapsLoader';
import Loader from './Loader';

storiesOf('MapsLoader', module)
  .addDecorator((s) => <div style={{ width: '500px', height: '300px' }}>{s()}</div>)
  .add('default', () => (
    <Loader loading renderLoading={() => <MapsLoader />}>
      <p>Invisible Content</p>
    </Loader>
  ));
