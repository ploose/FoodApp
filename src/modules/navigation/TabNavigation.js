import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image } from 'react-native';

import tabNavigationData from './tabNavigationData';

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
}
