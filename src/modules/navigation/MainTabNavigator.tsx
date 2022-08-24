import * as React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles';
import tabNavigationData from './tabNavigationData';
import { firebase } from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

import PurchaseStorageProvider, {

} from '../../../src/context/PurchaseStorageContext';

export default function BottomTabs() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
    }
  });
  return (
    <PurchaseStorageProvider>
      <Tab.Navigator
        tabBarOptions={{ style: { height: Platform.OS === 'ios' ? 90 : 60 } }}
      >
        {tabNavigationData.map((item, idx) => (
          <Tab.Screen
            key={`tab_item${idx + 1}`}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.tabBarItemContainer}>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={[
                      styles.tabBarIcon,
                      focused && styles.tabBarIconFocused,
                    ]}
                  />
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? colors.primary : colors.gray,
                    bottom: 4,
                  }}
                >
                  {item.name}
                </Text>
              ),
            }}
          />
        ))}
        {/* <Tab.Screen
        name={"Survey"}
        component={MultiStepSignUpSurvey}/> */}
      </Tab.Navigator>
    </PurchaseStorageProvider>
  );
}

// TODO: Survey

// export const SurveyScreenStack = createStackNavigator({
//   SurveyScreen: { screen: MultiStepSignUpSurvey },

// }, {
//   initialRoute: 'SurveyScreen',
// })

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -5 : -5,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
});
