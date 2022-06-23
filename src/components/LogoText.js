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
  
    // marginBottom: 8,
    // height: '100%',
    // aspectRatio: 1
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#fff',
    // borderRadius: 30,
    // flex: 1,
    // resizeMode:"contain",
    // // resizeMethod:"resize",
    // // width: 0.5,
    // // height: 110,
    // marginBottom: 8,
  },
});
