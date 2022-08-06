import React from 'react';
import { Alert, Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import NutritionListEntry from './NutritionListEntry';

export default function ProductDetails() {
  // const openPanel = msg => {
  //   setSwipablePanelActive(true);
  // };
  // const closePanel = () => {
  //   setSwipablePanelActive(false);
  // };

  function getNutriScoreImage(nutriScore: string) {
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
    <View style={styles.productInfoContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerContainer_image}
          source={{
            uri:
              'https://image.migros.ch/mo-boxed/v-w-480-h-360/10df3d2acfe3401edc25152be98627285f821d50/kartoffelbrot-mit-nuessen-ip-suisse.jpg',
          }}
        />

        <View style={styles.headerContainer_productInfo}>
          <Text style={{ fontWeight: 'bold' }}>
            Kartoffelbrot mit Nüssen IP Suisse
          </Text>
          <Text style={{ fontSize: 13 }}>Grossbrot frisch</Text>
          <Text style={{ fontSize: 13 }}>350g</Text>

          <View style={styles.headerContainer_productInfo_nutriScore}>
            {getNutriScoreImage('A')}
          </View>
        </View>
      </View>

      <View style={styles.nutritionInfoContainer}>
        <Text style={{ fontWeight: 'bold' }}>Nutrition per 100g</Text>
        <NutritionListEntry
          color={'green'}
          quantity={'5.6g'}
          name={'Fett'}
          description={'Mittlere Menge'}
        />
        <NutritionListEntry
          color={'red'}
          quantity={'5.6g'}
          name={'Fett'}
          description={'Mittlere Menge'}
        />
        <NutritionListEntry
          color={'yellow'}
          quantity={'5.6g'}
          name={'Fett'}
          description={'Mittlere Menge'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productInfoContainer: {
    backgroundColor: colors.primary,
    // flex: 1,
    // flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 10,
    height: 150,
  },
  headerContainer_image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    transform: [{ scale: 1.25 }],
    height: undefined,
    aspectRatio: 1,
  },
  headerContainer_productInfo: {
    width: '70%',
  },
  nutritionInfoContainer: {
    backgroundColor: colors.white,
    // flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  headerContainer_productInfo_nutriScore: {
    padding: 5,
    width: '50%',
    justifyContent: 'center',
  },
  nutriScore: {
    aspectRatio: 1024 / 555,
    width: Dimensions.get('window').width / 4,
    height: 'auto',
    justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
});
