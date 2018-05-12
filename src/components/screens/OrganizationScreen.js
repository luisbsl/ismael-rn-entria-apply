import React from 'react'
import { View, Text } from 'react-native'
import Styled from 'styled-components'

import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../relay-tools/createEnvironment'

import MemberFlatlist from '../MemberFlatlist'

const OrganizationScreenQuery = graphql`
  query OrganizationScreenQuery {
    organization(login: "entria") {
      ...MemberFlatlist_organization
    }
  }`

const Container = Styled.View`
  flex: 1;
  background-color: ${'#fff'};
  align-items: ${'center'};
  justify-content: ${'center'};
`

export default class MemberScreen extends React.Component {
  render() {
    return (
      <Container>
        {/* Here will be a input to seacrh for the organization */}

        <QueryRenderer
          environment={environment}
          query={OrganizationScreenQuery}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>
            } else if (props) {
              return (
                <MemberFlatlist
                  organization={props.organization}
                  navigation={this.props.navigation}
                />
              )
            } else {
              return <Text>Loading</Text>
            }
          }}
        />
      </Container>
    )
  }
}