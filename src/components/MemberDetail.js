import React from 'react'
import { View, Text } from 'react-native'
import { createFragmentContainer } from 'react-relay'

class MemberDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>Member Detail</Text>
        <Text>{this.props.member.bio}</Text>
      </View>
    )
  }
}

export default createFragmentContainer(MemberDetail, graphql`
  fragment MemberDetail_member on User {
    id
    login
    name
    avatarUrl
    bio
  }
`)