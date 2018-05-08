import React from 'react'
import { FlatList, View, Text, Dimensions } from 'react-native'
import Styled from 'styled-components'

import Member from '../Member'
import ErrorCard from '../ErrorCard'

const Container = Styled.View`
  flex: 1;
  background-color: ${'#f2f2f2'};
  align-items: ${'center'};
  width: ${Dimensions.get('window').width}px;
`

const Title = Styled.Text`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: ${'bold'};
`

export default class MemberFlatlist extends React.Component {
  render() {
    return (
      <Container>
        <Title>Entria Members from Github</Title>
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
      </Container>
    )
  }
}