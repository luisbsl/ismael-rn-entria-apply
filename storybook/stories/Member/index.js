import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

import Member from '../../../src/member/Member'

const withProps = storiesOf('Member', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with name and avatar', () => {
    const member = {
      "name": "Luis Ismael Lima",
      "login": "luisbsl",
      "avatarUrl": "https://avatars1.githubusercontent.com/u/1160042?v=4"
    };
    return <Member member={member} />
  });

const withoutProps = storiesOf('Member', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('without properties', () => {
    return <Member />
  });


export {
  withProps,
  withoutProps
}