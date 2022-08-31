// @flow
import React, { useState } from 'react';

import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { emailValidator } from '../../../helpers/emailValidator';
import { resetPassword } from '../AuthenticationService';
import { RootStackParamList } from '../../navigation/ParamLists';
import { StackNavigationProp } from '@react-navigation/stack';

type navigationType = StackNavigationProp<
  RootStackParamList,
  'ResetPasswordScreen'
>;
type Props = { navigation: navigationType };

export default function ResetPasswordScreen(props: Props) {
  const [email, setEmail] = useState({ value: '', error: '' });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    resetPassword(email.value);
    props.navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={props.navigation.goBack} />
      <Logo />
      <Header>Passwort zurücksetzen</Header>
      <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Du erhälst eine Mail zum Zurücksetzen deines Passworts."
      />
      {/* @ts-ignore */}
      <Button
        mode="outlined"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Absenden
      </Button>
    </Background>
  );
}
