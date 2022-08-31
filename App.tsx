import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AppView from './src/modules/AppView';

function LoginApp() {
  const [initializing, setInitializing] = useState(true);
  const [_, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <AppView />
    </NavigationContainer>
  );
}

export default function App() {
  return <LoginApp />;
}
