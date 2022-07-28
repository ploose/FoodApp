// @flow
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { theme } from '../../../core/theme';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
import LogoText from '../../../components/LogoText';
import Paragraph from '../../../components/Paragraph';
import { signInWithEmailAndPassword } from '../AuthenticationService';

type Props = {};

export default function LoginScreen(props: Props) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    signInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <Background>
      <View style={styles.header}>
        <LogoText />
      </View>
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <Header>In Account einloggen</Header>
      </View>
      <Paragraph>Willkommen zurück</Paragraph>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Passwort vergessen?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="outlined" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Noch keinen Account? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.link}>Jetzt registrieren!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
