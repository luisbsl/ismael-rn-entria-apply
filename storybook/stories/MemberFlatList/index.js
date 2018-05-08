import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native'
import CenterView from '../CenterView';

import MemberFlatlist from '../../../src/components/screens/MemberFlatlist'

const withProps = storiesOf('Member FlatList', module)
  .add('with properties', () => {
    const memberList = {
      "organization": {
        "members": {
          "edges": [
            {
              "node": {
                "login": "JCMais",
                "name": "Jonathan Cardoso Machado",
                "avatarUrl": "https://avatars1.githubusercontent.com/u/1041647?v=4",
                "followers": {
                  "totalCount": 61
                }
              }
            },
            {
              "node": {
                "login": "sibelius",
                "name": "Sibelius Seraphini",
                "avatarUrl": "https://avatars3.githubusercontent.com/u/2005841?v=4",
                "followers": {
                  "totalCount": 770
                }
              }
            },
            {
              "node": {
                "login": "rturk",
                "name": "Rafael Turk",
                "avatarUrl": "https://avatars1.githubusercontent.com/u/2236950?v=4",
                "followers": {
                  "totalCount": 78
                }
              }
            }
          ]
        }
      }
    }
    return <MemberFlatlist viewer={memberList} />
  });

const withoutProps = storiesOf('Member FlatList', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('without properties', () => {
    return <MemberFlatlist />
  });

export {
  withProps,
  withoutProps
}