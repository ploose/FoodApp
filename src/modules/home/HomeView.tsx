import React from 'react';
import { StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Purchase from '../../components/foodtracking/PurchaseListEntry';

export default function HomeScreen() {
  // TODO: Go tho the purchase
  // function goToPurchase() {
  //   props.navigation.dispatch(state => {
  //     const routes = [
  //       ...state.routes,
  //       { name: 'HistoryScreen' },
  //       { name: 'PurchaseDetails', params: { test: 'r' } },
  //     ];
  //   });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.headerText}>
          <Text size={20} color={colors.darkGray}>
            Derzeitiger Score
          </Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>A</Text>
          </View>
        </View>
      </View>

      <View style={styles.lastPurchaseSection}>
        <Text>Letzter Einkauf</Text>
        <Purchase
          name={'Migros Altstätten'}
          date={'20.01.2022'}
          cost={'123.40'}
          score={'C'}
        />
      </View>

      <View style={styles.section}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    paddingTop: 515,
    alignItems: 'center',
    position: 'absolute',
  },
  scoreCircle: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 20,
    marginTop: 10,
    backgroundColor: colors.nutriScore_A,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
  },
  scoreText: {
    color: colors.white,
    fontSize: 100,
    textAlign: 'center',
    height: '100%',
  },
  headerBackground: {
    backgroundColor: colors.primary,
    height: 750,
    width: 750,
    borderRadius: 750 / 2,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    marginTop: -510,
    alignItems: 'center',
  },
  lastPurchaseSection: {
    width: '90%',
    marginTop: 20,
    flex: 1,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
});
