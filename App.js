import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import Styled from 'styled-components'
import { StackNavigator } from 'react-navigation'

import OrganizationScreen from './src/components/screens/OrganizationScreen'
import MemberScreen from './src/components/screens/MemberScreen'

const AppNavigation = StackNavigator(
  {
    Organization: { screen: OrganizationScreen, title: 'Organization Members' },
    Member: { screen: MemberScreen, title: 'Member Detail' }
  },
  {
    initialRouteName: 'Organization',
  })

export default () => <AppNavigation />