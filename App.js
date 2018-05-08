import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QueryRenderer
          environment={environment}
          query={AppQuery}
          render={RenderApp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
