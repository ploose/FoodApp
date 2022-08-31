import { StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'react-native-ui-lib';

import { Nutriscore } from './nutriScores';

export function nutriScoreImageProvider(nutriScore: Nutriscore) {
  switch (nutriScore) {
    case 'A':
      return (
        <Image
          source={require('../../assets/images/nutriscore/A.png')}
          style={styles.nutriScore}
        />
      );

    case 'B':
      return (
        <Image
          source={require('../../assets/images/nutriscore/B.png')}
          style={styles.nutriScore}
        />
      );

    case 'C':
      return (
        <Image
          source={require('../../assets/images/nutriscore/C.png')}
          style={styles.nutriScore}
        />
      );

    case 'D':
      return (
        <Image
          source={require('../../assets/images/nutriscore/D.png')}
          style={styles.nutriScore}
        />
      );
    case 'E':
      return (
        <Image
          source={require('../../assets/images/nutriscore/E.png')}
          style={styles.nutriScore}
        />
      );

    default:
  }
}

const styles = StyleSheet.create({
  nutriScore: {
    alignSelf: 'center',
    width: '100%',
    resizeMode: 'contain',
    height: 'auto',
    aspectRatio: 1024 / 555,
  },
});
