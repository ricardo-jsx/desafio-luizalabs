import React from 'react';
import { storiesOf } from '@storybook/react';

import Close from './Close';

storiesOf('Close', module).add('default', () => (
  <Close>
    <div>If you are reading this, I wish you have a nice day :3</div>
  </Close>
));
