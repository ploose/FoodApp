import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import TabNavigator from './MainTabNavigator';
import GalleryScreen from '../gallery/GalleryViewContainer';
import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';
import Dashboard from '../login/dashboard/DashboardViewContainer';

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

const StackNavigationData = [
  // {
    //   name: 'React Native Starter',
    //   component: TabNavigator,
    //   headerLeft: null,
    //   headerBackground: { source: headerBackground },
    //   headerTitleStyle: {
      //     fontFamily: fonts.primaryRegular,
      //     color: colors.white,
      //     fontSize: 18,
  //   },
  // },
  {
    name: 'Gallery',
    component: GalleryScreen,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  // Login
];

export default StackNavigationData;
