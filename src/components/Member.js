import React from 'react'
import { View } from 'react-native'

import MemberCard from './MemberCard'
import ErrorCard from './ErrorCard'

export default class User extends React.Component {
  render() {
    return (
      <View>
        {
          this.props.member
            ?
            <MemberCard member={this.props.member} />
            :
            <ErrorCard error='Error! Member properties is required!' />
        }
      </View>
    )
  }
}