import React from 'react'
import { Text } from 'react-native'
import Styled from 'styled-components'

const styles = {
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff'
  }
}

const Error = Styled.Text`
  font-weight: ${'bold'};
  align-items: ${'center'};
  background-color: ${'red'};
  color: ${'#fff'};
`

export default ErrorCard = (props) =>
  <Error>
    {props.error}
  </Error>