import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'

export default MemberCard = (props) => {
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer} >
        <Image
          resizeMode={'cover'}
          source={{ uri: `${props.member.avatarUrl}` }}
          style={styles.image} />
      </View>
      <View style={styles.infoContainer} >
        <Text style={styles.info}>
          {props.member.name.toUpperCase()}
        </Text>
        <Text style={styles.subtitle}>
          by {props.member.login}
        </Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#bfbfbf',
    borderWidth: 2,
    alignItems: 'center',
    width: (Dimensions.get('window').width - 10)
  },
  imageContainer: {
    alignItems: 'center',
    width: '30%',
  },
  infoContainer: {
    flex: 1,
    height: 100,
  },
  image: {
    marginBottom: 10,
    marginTop: 10,
    width: 90,
    height: 90,
    borderRadius: 100
  },
  info: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 15,
    marginTop: 15,
  },
  subtitle: {
    marginLeft: 15,
  }
}