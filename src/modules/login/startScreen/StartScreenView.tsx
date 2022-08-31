// @flow
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';
import LogoText from '../../../components/LogoText';
import { RootStackParamList } from '../../navigation/ParamLists';

type navigationType = StackNavigationProp<RootStackParamList, 'StartScreen'>;
type Props = { navigation: navigationType };

export default function StartScreen(props: Props) {
  return (
    <Background>
      <View style={styles.header}>
        <LogoText />
        {/* <Logo /> */}
      </View>
      <View
        style={{
          paddingBottom: 100,
        }}
      >
        <Header>Food Tracking App</Header>
        <Paragraph>Erlebe die Welt der Ernährung</Paragraph>
      </View>
      <View style={styles.buttons}>
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('LoginScreen')}
          style={undefined}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('RegisterScreen')}
          style={undefined}
        >
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
});
