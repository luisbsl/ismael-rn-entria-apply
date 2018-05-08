import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import Styled from 'styled-components'

import environment from './src/relay-tools/createEnvironment'

import MemberFlatlist from './src/components/screens/MemberFlatlist'

const AppQuery = graphql`
  query AppQuery {
    organization(login: "entria") {
      members(first: 10) {
        edges {
          node {
            login
            name
            avatarUrl
          }
        }
      }
    }
}`

const RenderApp = ({ error, props }) => {
  if (error) {
    return <Text>{error.message}</Text>
  } else if (props) {
    return (
      <MemberFlatlist viewer={props} />
    )
  } else {
    return <Text>Loading</Text>
  }
}

const Container = Styled.View`
  flex: 1;
  background-color: ${'#fff'};
  align-items: ${'center'};
  justify-content: ${'center'};
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <QueryRenderer
          environment={environment}
          query={AppQuery}
          render={RenderApp}
        />
      </Container>
    )
  }
}