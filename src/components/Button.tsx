import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

export default function Button({
  mode,
  style,
  children,
  ...props
}: {
  mode: 'text' | 'outlined' | 'contained' | undefined,
  style: any,
  children:any,
  onPress:Function
}) {
  // @ignore-tsc
  return (
    //  @ts-ignore -> JS Object
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.green },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >{children}</PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: theme.colors.white,
    lineHeight: 26,
  },
});
