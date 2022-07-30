import * as React from 'react';
import { Image } from 'react-native';
import { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationDataNotAuth from './stackNavigationDataNotAuth';

import BottomTabs from './MainTabNavigator';

const RootStackScreen = ({ user }: { user: any }) =>
  !user ? (
    <Stack.Navigator initialRouteName="StartScreen">
      {StackNavigationDataNotAuth.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerBackground: () => (
              <Image source={item.headerBackground.source} />
            ),
            headerTitleStyle: item.headerTitleStyle,
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  ) : (
    <BottomTabs />
  );

const Stack = createStackNavigator();

export default function Navigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  function onAuthStateChanged(user: any) {
    setUser(user);
    console.log('User!', user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <RootStackScreen user={user} />;
}
