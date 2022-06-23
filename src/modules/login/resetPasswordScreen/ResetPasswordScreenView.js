// @flow
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

import Background from '../../../components/Background'
import BackButton from '../../../components/BackButton'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import { emailValidator } from '../../../helpers/emailValidator'

type Props = {};

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    resetPassword(email.value);
    navigation.navigate('LoginScreen')
  }

  function resetPassword(email) {
    auth()
    .sendPasswordResetEmail(email)
    .then(user => {
      console.log("User:", user);
      alert("If this account exists, a reset link will be sent to the mail.");
    })
    .catch(error => {
      console.error(error);
      alert("Password reset is currently not available;.");
    });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Passwort zurücksetzen</Header>
      <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Du erhälst eine Mail zum Zurücksetzen deines Passworts."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Absenden
      </Button>
    </Background>
  )
}

