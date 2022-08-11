import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib/src/style/colors';

import { colors, fonts } from '../styles';

function applyGeneralStyles({
  style,
  bold,
  light,
  white,
  underline,
  hCenter,
  lineThrough,
  color,
  size,
}:any) {
    
  return [
    style && style,
    bold && styles.bold,
    light && styles.light,
    white && styles.white,
    underline && styles.underline,
    hCenter && { textAlign: 'center' },
    lineThrough && styles.lineThrough,
    color && { color },
    size && { fontSize: size },
  ];
}

type Props = {
  size: number;
  color: Colors;

}

export function Text(props:any) {
  const finalStyle = [styles.default, ...applyGeneralStyles(props)];

  return <RNText {...props} style={finalStyle} />;
}

export function Title(props:any) {
  const finalStyle = [
    styles.default,
    styles.title,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

export function Caption(props:any) {
  const finalStyle = [
    styles.default,
    styles.caption,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: fonts.primaryRegular,
  },
  bold: {
    fontFamily: fonts.primaryBold,
  },
  light: {
    fontFamily: fonts.primaryLight,
  },
  title: {
    fontSize: 18,
  },
  caption: {
    fontSize: 13,
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.gray,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  white: {
    color: colors.white,
  },
});
