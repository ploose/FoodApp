import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import tabNavigationData from './tabNavigationData';
import StackNavigationDataNotAuth from './stackNavigationDataNotAuth';

const Stack = createStackNavigator();

export default function TabNavigation(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: { height: Platform.OS === 'ios' ? 90 : 50 } }}
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
                }}
              >
                {item.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );

  const headerLeftComponentMenu = () => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.toggleDrawer()}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <Image
          source={require('../../../assets/images/drawer/menu.png')}
          resizeMode="contain"
          style={{
            height: 20,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerLeft: item.headerLeft || headerLeftComponentMenu,
            headerBackground: () => (
              <Image
                style={styles.headerImage}
                source={item.headerBackground.source}
              />
            ),
            headerTitleStyle: item.headerTitleStyle,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: Header.height,
  },
});
