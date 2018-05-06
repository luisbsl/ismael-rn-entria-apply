import React from 'react'
import { View } from 'react-native'

import MemberCard from '../layout/MemberCard'
import ErrorCard from '../layout/ErrorCard'

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