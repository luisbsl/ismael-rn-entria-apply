import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';

storiesOf('Welcome', module).add('Project Storybook', () => <Welcome showApp={linkTo('Button')} />);

require('./Member')
require('./MemberFlatList')
