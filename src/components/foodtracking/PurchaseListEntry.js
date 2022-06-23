import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

export default function Purchase(props) {

  function getNutriScoreImage(nutriScore) {
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
        <View style={styles.logoSection}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/retailers/Migros_logo_small.png')}
          />
        </View>
        <View style={styles.retailerNameSection}>
          <Text style={styles.retailerName}>{props.name}</Text>
        </View>
      </View>

      <View style={styles.lastPurchaseBoxSection2}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <View style={styles.costContainer}>
          <Text style={styles.cost}>CHF {props.cost}</Text>
        </View>
        <View style={styles.nutriScoreContainer}>{getNutriScoreImage(props.score)}</View>
      </View>
      {/* <View style={styles.lastPurchaseBoxSection}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  lastPurchaseBox: {
    borderColor: colors.black,
    backgroundColor: colors.primary,
    borderWidth: 2,
    // padding: 5,
    flex: 1,
  },
  lastPurchaseBoxSection: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    flexBasis: '40%',
  },
  lastPurchaseBoxSection2: {
    flex: 1,
    flexDirection: 'row',
    // padding: 5,
    borderTopWidth: 2,
    justifyContent: 'space-evenly',
    flexBasis: '60%',
  },
  dateContainer: {
    borderRightWidth: 2,
    padding: 5,
    // alignItems: 'center',
    // textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    flexBasis: '33%',
  },
  date: {
    alignSelf: 'center',
  },
  costContainer: {
    borderRightWidth: 2,
    padding: 5,
    flexBasis: '33%',
    justifyContent: 'center',
    flex: 1,
  },
  cost: {
    alignSelf: 'center',
  },
  nutriScoreContainer: {
    padding: 5,
    flexBasis: '33%',
    justifyContent: 'center',
    flex: 1,
  },
  nutriScore: {
    alignSelf: 'center',
    // flex: 1,
    width: 100,
    resizeMode: 'contain',
    height: 40,
  },
  logo: {
    // flex: 1,
    width: 100,
    resizeMode: 'contain',
    height: 20,
  },
  logoSection: {
    // width: '50%',
    flex: 1,
    flexBasis: '40%',
    alignSelf: 'center',
    // borderColor: colors.black,
    // backgroundColor: colors.bluish,
    // borderWidth: 2,
    paddingLeft: 5,
  },
  retailerNameSection: {
    flexBasis: '60%',
    flex: 1,
    alignSelf: 'center',
  },
  retailerName: {
    fontWeight: 'bold',
  },
});
