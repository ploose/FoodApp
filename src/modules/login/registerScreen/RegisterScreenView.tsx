// @flow
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import BackButton from '../../../components/BackButton';
import { theme } from '../../../core/theme';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
import Button from '../../../components/Button';
import LogoText from '../../../components/LogoText';
import { createUser } from '../AuthenticationService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/ParamLists';

type registerScreenProp = StackNavigationProp<RootStackParamList, 'ResetPasswordScreen'>;

export default function RegisterScreen({ navigation }:{navigation:registerScreenProp}) {
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

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View>
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
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address" description={undefined}      />
      <TextInput
        label="Passwort"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry description={undefined}      />
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
