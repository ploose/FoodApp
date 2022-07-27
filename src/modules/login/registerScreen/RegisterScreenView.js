// @flow
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import BackButton from '../../../components/BackButton';
import { theme } from '../../../core/theme';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
import Button from '../../../components/Button';
import LogoText from '../../../components/LogoText';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    createUser(email.value, password.value);
  };

  function createUser(email, password) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account created & signed in!');
        console.log('UserCrednetial', userCredential.user);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password }),
        };
        try {
          fetch(
            'https://api.interactions.ics.unisg.ch/foodcoach/backend/user/register',
            requestOptions,
          )
            .then(res => res.json())
            .then(res => {
              if (res.token) {
                firestore()
                  .collection('users')
                  .doc(userCredential.user.uid)
                  .set({
                    email: email,
                    token: res.token,
                  });
              } else {
                firestore()
                  .collection('users')
                  .doc(userCredential.user.uid)
                  .set({
                    token: 'None',
                  });
              }
            });
        } catch (error) {
          console.error(error);
        }

        userCredential.user.sendEmailVerification().then(() => {
          console.log('Email verificiation sent');
          alert('Bitte verifiziere deine Mail bei Gelegenheit.');
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Diese Mail ist bereits in Verwendung.');
          alert('Diese Mail ist bereits in Verwendung.');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('Die Mail ist ungültig.');
          alert('Die Mail ist ungültig.');
        }

        console.error(error);
      });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={styles.header}>
        <LogoText />
      </View>
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <Header>Account erstellen</Header>
      </View>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Passwort"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="outlined"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Du hast bereits einen Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
