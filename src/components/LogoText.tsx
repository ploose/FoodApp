import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function LogoText() {
  return (
    <Image source={require('../assets/foodApp.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 110,
    resizeMode: 'contain',
  },
});
