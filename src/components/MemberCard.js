import React from 'react'
import { View, Image, Text, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { createFragmentContainer } from 'react-relay'

const Container = styled.View`
  flex-direction: ${'row'};
  margin-bottom: 10px;
  border-color: ${'#bfbfbf'};
  border-width: 2px;
  align-items: ${'center'};
  width: ${(Dimensions.get('window').width - 10)}px;
`

const ImageContainer = styled.View`
  align-items: ${'center'};
  width: ${'30%'};
`

const InfoContainer = styled.View`
  flex: 1;
  height: 100px;
`

const StyledImage = styled.Image`
  margin-bottom: 10px;
  margin-top: 10;
  width: 90px;
  height: 90px;
  border-radius: 100;
`

const Info = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 15px;
  margin-top: 15px;
`

const Subtitle = styled.Text`
  margin-left: 15px;
`

class MemberCard extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      this.props.member
        ?
        <TouchableHighlight onPress={() => navigate('Member', { login: this.props.member.login })}>
          <Container>
            <ImageContainer>
              <StyledImage
                resizeMode={'cover'}
                source={{ uri: `${this.props.member.avatarUrl}` }} />
            </ImageContainer>
            <InfoContainer>
              <Info>
                {this.props.member.name.toUpperCase()}
              </Info>
              <Subtitle>
                by {this.props.member.login}
              </Subtitle>
            </InfoContainer>
          </Container>
        </TouchableHighlight>
        :
        <ErrorCard error='Error! Member properties is required!' />
    )
  }
}

export default createFragmentContainer(MemberCard, graphql`
  fragment MemberCard_member on User {
    id
    login
    name
    avatarUrl
  }
`)