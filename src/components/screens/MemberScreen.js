import React from 'react'
import { View, Text } from 'react-native'
import Styled from 'styled-components'

import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../relay-tools/createEnvironment'

import MemberDetail from '../MemberDetail'

const MemberScreenQuery = graphql`
  query MemberScreenQuery($memberLogin: String!) {
    user(login: $memberLogin) {
      ...MemberDetail_member
    }
  }`

export default class MemberScreen extends React.Component {
  render() {
    // const { navigation } = this.props.navigation
    const { params } = this.props.navigation.state
    return (
      <View>
        <QueryRenderer
          environment={environment}
          query={MemberScreenQuery}
          variables={{
            memberLogin: params.login,
          }}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>
            } else if (props) {
              return (
                <MemberDetail member={props.user} />
              )
            } else {
              return <Text>Loading</Text>
            }
          }}
        />
      </View>
    )
  }
}