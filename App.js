import { Provider } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/styles';
import auth from '@react-native-firebase/auth';
import { store, persistor } from './src/redux/store';
import firestore from '@react-native-firebase/firestore';
import AppView from './src/modules/AppViewContainer';

const usersCollection = firestore().collection('users')

function SignInAnonymously() {
  auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      console.error(error);
    });
}

function LoginApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(user);

  return (
    <Provider store={store}>
      <NavigationContainer>
      <PersistGate
      loading={
        <View style={styles.container}>
          <ActivityIndicator color={colors.red} />
        </View>
      }
      persistor={persistor}
    >
      <AppView />
    </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

export default function App() {
  return <LoginApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 6,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
