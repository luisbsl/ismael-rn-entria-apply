import React from 'react'
import { FlatList, View, Text, Dimensions } from 'react-native'

import Member from './Member'
import ErrorCard from '../layout/ErrorCard'

export default class MemberFlatList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Entria Members from Github</Text>
        {
          this.props.viewer
            ?
            <FlatList
              data={this.props.viewer.organization.members.edges}
              keyExtractor={(item, index) => item.node.login}
              renderItem={
                ({ item }) =>
                  <Member member={item.node} />
              }
            />
            :
            <ErrorCard error='Error! Cannot fetch data from GraphQL!' />
        }
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold'
  }
}