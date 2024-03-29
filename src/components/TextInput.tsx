import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
} from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

type props = {
  description?: any,
  label?: string,
  returnKeyType?: ReturnKeyTypeOptions,
  value?: string,
  onChangeText?: ((text: string) => void) & Function,
  error: boolean,
  errorText?: string,
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined,
  autoCompleteType?: string,
  textContentType?: any,
  keyboardType?: KeyboardTypeOptions,
  secureTextEntry?: boolean
};

export default function TextInput({
  errorText,
  description,
  error,
  ...props
}: props) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
