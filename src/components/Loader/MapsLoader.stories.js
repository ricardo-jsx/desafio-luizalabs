import React from 'react';
import { storiesOf } from '@storybook/react';

import MapsLoader from './MapsLoader';
import Loader from './Loader';

storiesOf('Loader', module).add('default map', () => (
  <Loader loading renderLoading={() => <MapsLoader />}>
    <p>Invisible Content</p>
  </Loader>
));
