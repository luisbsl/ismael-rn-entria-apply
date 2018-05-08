import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import styled from 'styled-components'

export default MemberCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage
          resizeMode={'cover'}
          source={{ uri: `${props.member.avatarUrl}` }} />
      </ImageContainer>
      <InfoContainer>
        <Info>
          {props.member.name.toUpperCase()}
        </Info>
        <Subtitle>
          by {props.member.login}
        </Subtitle>
      </InfoContainer>
    </Container>
  )
}

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