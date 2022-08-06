import React from 'react';
import { Alert, Dimensions, StyleSheet } from 'react-native';
import { colors, paddings } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

import { Nutriscore } from '../../helpers/nutriScores';

export default function Purchase(props: { name: string; date: string; cost: string | number; score: Nutriscore; }) {
  function getNutriScoreImage(nutriScore: Nutriscore) {
    switch (nutriScore) {
      case 'A':
        return (
          <Image
            source={require('../../../assets/images/nutriscore/A.png')}
            style={styles.nutriScore}
          />
        );

      case 'B':
        return (
          <Image
            source={require('../../../assets/images/nutriscore/B.png')}
            style={styles.nutriScore}
          />
        );

      case 'C':
        return (
          <Image
            source={require('../../../assets/images/nutriscore/C.png')}
            style={styles.nutriScore}
          />
        );

      case 'D':
        return (
          <Image
            source={require('../../../assets/images/nutriscore/D.png')}
            style={styles.nutriScore}
          />
        );
      case 'E':
        return (
          <Image
            source={require('../../../assets/images/nutriscore/E.png')}
            style={styles.nutriScore}
          />
        );

      default:
        Alert.alert('NUMBER NOT FOUND');
    }
  }

  return (
    <View style={styles.lastPurchaseBox}>
      <View style={styles.lastPurchaseBoxSection}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/retailers/Migros_logo_small.png')}
          />
          <Text style={styles.retailerName}>{props.name}</Text>

      </View>

      <View style={styles.lastPurchaseBoxSection2}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <View style={styles.costContainer}>
          <Text style={styles.cost}>CHF {props.cost}</Text>
        </View>
        <View style={styles.nutriScoreContainer}>
          {getNutriScoreImage(props.score)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lastPurchaseBox: {
    borderColor: colors.black,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    height: Dimensions.get('window').width/5,
  },
  lastPurchaseBoxSection: {
    flexDirection: 'row',
    padding: 10,
    height: '50%',
    width: '100%'
  },
  logo: {
    aspectRatio: 4761/880,
    alignSelf: 'center',
    flex: 1

  },
  lastPurchaseBoxSection2: {
    flexDirection: 'row',
    borderTopWidth: 2,
    justifyContent: 'space-evenly',
    height: '50%',
    width: '100%'

  },
  dateContainer: {
    borderRightWidth: 2,
    padding: 5,
    justifyContent: 'center',
    flex: 1,
  },
  date: {
    alignSelf: 'center',
  },
  costContainer: {
    borderRightWidth: 2,
    padding: 5,
    justifyContent: 'center',
    flex: 1,
  },
  cost: {
    alignSelf: 'center',
  },
  nutriScoreContainer: {
    padding: 5,
    justifyContent: 'center',
    flex: 1,
  },
  nutriScore: {
    aspectRatio: 1024/555,
    alignSelf: 'center',
    flex: 1,
  },
  retailerNameSection: {
    flex: 6,
    alignSelf: 'center',
  },
  retailerName: {
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '50%',
    flex: 2,
    paddingLeft: '5%',
    textAlign: 'left'
  },
});
