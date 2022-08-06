// @flow

import { View } from 'react-native';
import React from 'react';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';
import LogoText from '../../../components/LogoText';
import { StyleSheet } from 'react-native';

type Props = {};

export default function StartScreen(props:any) {
  return (
    <Background>
      <View
        style={styles.header}
      >
        <LogoText />
        {/* <Logo /> */}
      </View>
      <View style= {{
        paddingBottom: 100
      }}>
        <Header>Food Tracking App</Header>
        <Paragraph>Erlebe die Welt der Ernährung</Paragraph>
      </View>
      <View
        style={styles.buttons}
      >
        {/* @ts-ignore */}
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('LoginScreen')} style={undefined}        >
          Login
        </Button>
        {/* @ts-ignore */}
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('RegisterScreen')} style={undefined}        >
          Registrieren
        </Button>
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  buttons: {

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',

  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
