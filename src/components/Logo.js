import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/foodAppLogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 20,
  },
})
