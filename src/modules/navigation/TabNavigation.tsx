// import 'react-native-gesture-handler';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, Platform, Text, View } from 'react-native';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// import tabNavigationData from './tabNavigationData';
// import { colors } from '../../styles';

// const Tab = createMaterialTopTabNavigator({}, {swipeEnabled: true});

// export default function TabNavigation() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{ style: { height: Platform.OS === 'ios' ? 90 : 50 }}}
//     >
//       {tabNavigationData.map((item, idx) => (
//         <Tab.Screen
//           key={`tab_item${idx + 1}`}
//           name={item.name}
//           component={item.component}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View>
//                 <Image resizeMode="contain" source={item.icon} />
//               </View>
//             ),
//             tabBarLabel: ({ focused }) => (
//               <Text
//                 style={{
//                   fontSize: 12,
//                   color: focused ? colors.primary : colors.gray,
//                 }}
//               >
//                 {item.name}
//               </Text>
//             ),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }
