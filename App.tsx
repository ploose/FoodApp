import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AppView from './src/modules/AppView';

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
  function onAuthStateChanged(user:any) {
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
      <NavigationContainer>
        <AppView />
      </NavigationContainer>
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
