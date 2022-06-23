import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { Button } from '../../components';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Purchase from '../../components/foodtracking/PurchaseListEntry';

function logOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  function goToPurchase() {
    props.navigation.dispatch(state => {
      const routes = [...state.routes, {name: 'HistoryScreen'}, {name: "PurchaseDetails", params: {test:"r"}}];
    });
  }

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
      {/* <Text size={30} bold white style={styles.title}>
            React Native Starter
          </Text> */}

      <View style={[styles.section, styles.sectionLarge]}>
        {/* <Purchase/>
      <Purchase/>
      <Purchase/> */}
        {/* <Text color="#19e7f7" hCenter size={15} style={styles.description}>
          {' '}
       </Text>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text white bold size={50} style={styles.price}>
              {isExtended ? '$499' : '$99'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.priceLink}
            onPress={() =>
              isExtended ? setIsExtended(false) : setIsExtended(true)
            }
          >
            <Button
              style={[styles.demoButton, { flexBasis: '47%' }]}
              primary
              caption="Log out"
              onPress={logOut}
            />
          </TouchableOpacity>
        </View> */}
      </View>
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
  bgImage: {
    flex: 1,

    // marginHorizontal: -20,
    backgroundColor: colors.white,
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
    // flex: 1,
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
    borderColor: colors.white,
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
    // left: 0,
    // top: 0,
    // position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
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
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
