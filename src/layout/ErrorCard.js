import React from 'react'
import { Text } from 'react-native'

export default ErrorCard = (props) =>
  <Text style={styles.text}>
    {props.error}
  </Text>

const styles = {
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff'
  }
}