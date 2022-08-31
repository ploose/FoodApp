import React from 'react';
import { GestureResponderEvent, Image, TouchableOpacity } from 'react-native';

import LoginScreen from '../login/loginScreen/LoginScreenView';
import RegisterScreen from '../login/registerScreen/RegisterScreenView';
import ResetPasswordScreen from '../login/resetPasswordScreen/ResetPasswordScreenView';
import StartScreen from '../login/startScreen/StartScreenView';
import { colors, fonts } from '../../styles';

const headerLeftComponent = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined,
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <Image
        source={require('../../../assets/images/icons/arrow-back.png')}
        resizeMode="contain"
        style={{
          height: 200,
        }}
      />
    </TouchableOpacity>
  );
};

const headerBackground = require('../../../assets/images/topBarBg.png');

const StackNavigationDataNotAuth = [
  // Login
  {
    name: 'LoginScreen',
    component: LoginScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'ResetPasswordScreen',
    component: ResetPasswordScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'StartScreen',
    component: StartScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
];

export default StackNavigationDataNotAuth;
