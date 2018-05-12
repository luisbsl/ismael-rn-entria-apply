import React from 'react'
import { FlatList, View, Text, Dimensions } from 'react-native'
import Styled from 'styled-components'
import { createFragmentContainer } from 'react-relay'

import MemberCard from './MemberCard'
import ErrorCard from './ErrorCard'

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

class MemberFlatlist extends React.Component {
  render() {
    return (
      <Container>
        <Title>Entria Members from Github</Title>
        {
          this.props.organization
            ?
            <FlatList
              data={this.props.organization.members.edges}
              keyExtractor={(item, index) => index.toString()}
              renderItem={
                ({ item }) =>
                  <MemberCard
                    member={item.node}
                    navigation={this.props.navigation}
                  />
              }
            />
            :
            <ErrorCard error='Error! Cannot fetch data from GraphQL!' />
        }
      </Container>
    )
  }
}

export default createFragmentContainer(MemberFlatlist, graphql`
  fragment MemberFlatlist_organization on Organization { 
    id
    members(first: 10) {
      edges {
        node {
          ...MemberCard_member
        }
      }
    }
  }
`)