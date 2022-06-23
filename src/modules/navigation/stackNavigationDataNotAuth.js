import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import LoginScreen from '../login/loginScreen/LoginScreenViewContainer';
import RegisterScreen from '../login/registerScreen/RegisterScreenViewContainer';
import ResetPasswordScreen from '../login/resetPasswordScreen/ResetPasswordScreenViewContainer';
import StartScreen from '../login/startScreen/StartScreenViewContainer';

import { colors, fonts } from '../../styles';

const headerLeftComponent = props => {
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
          height: 20,
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
