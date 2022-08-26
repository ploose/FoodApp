import React from 'react';
import { Alert, Dimensions, StyleSheet } from 'react-native';
import { colors, paddings } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

import { Nutriscore } from '../../helpers/nutriScores';
import { nutriScoreImageProvider } from '../../helpers/nutriScoreImageProvider';

export default function Purchase(props: {
  name: string,
  date: string,
  cost: string,
  score: Nutriscore,
}) {

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
          <Text style={styles.cost}>
            CHF {parseFloat(props.cost).toFixed(2)}
          </Text>
        </View>
        <View style={styles.nutriScoreContainer}>
          <View style={styles.nutriScore}>
            {nutriScoreImageProvider(props.score)}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lastPurchaseBox: {
    borderColor: colors.black,
    backgroundColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 5,
    height: Dimensions.get('window').width / 5,
    elevation: 5
  },
  lastPurchaseBoxSection: {
    flexDirection: 'row',
    padding: 10,
    height: '50%',
    width: '100%',
  },
  logo: {
    aspectRatio: 4761 / 880,
    alignSelf: 'center',
    flex: 1,
  },
  lastPurchaseBoxSection2: {
    flexDirection: 'row',
    borderTopWidth: 2,
    justifyContent: 'space-evenly',
    height: '50%',
    width: '100%',
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
    aspectRatio: 1024 / 555,
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
    textAlign: 'left',
  },
});
