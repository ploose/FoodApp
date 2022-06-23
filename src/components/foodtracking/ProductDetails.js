import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { ProductPreview } from '..';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import NutritionListEntry from './NutritionListEntry';

export default function ProductDetails(props) {
  // console.log('props', JSON.stringify(props.route.params));
  // let purchaseDetails = props.route.params;

  let [SwipeablePanelActive, setSwipablePanelActive] = useState(true);

  openPanel = msg => {
    setSwipablePanelActive(true);
  };
  closePanel = () => {
    setSwipablePanelActive(false);
  };

  function getProductsArray(products) {
    let myArray = [];
    for (element in products) {
      products[element].id = element;
      myArray.push(products[element]);
    }
    return myArray;
  }

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
          <View style={styles.headerContainer_productInfo_textContainer}>
            <Text style={{ fontWeight: 'bold' }}>
              Kartoffelbrot mit Nüssen IP Suisse
            </Text>
            <Text style={{ fontSize: 13 }}>Grossbrot frisch</Text>
            <Text style={{ fontSize: 13 }}>350g</Text>
          </View>
          <View style={styles.headerContainer_productInfo_nutriScore}>
            {getNutriScoreImage("A")}
          </View>
        </View>
      </View>

      <View style={styles.nutritionInfoContainer}>
        <Text style={{fontWeight: 'bold'}}>Nutrition per 100g</Text>
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
      {/* <View style={styles.lastPurchaseBoxSection}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  productInfoContainer: {
    backgroundColor: colors.primary,
    // padding: 5,
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    // padding: 5,
    justifyContent: 'space-evenly',
    flexBasis: '60%',
    padding: 10,
    height: 150,
  },
  headerContainer_image: {
    flexBasis: '30%',
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    transform: [{ scale: 1.25 }],
    height: undefined,
    aspectRatio: 1,
  },
  headerContainer_productInfo: {
    flexBasis: '70%',
  },
  nutritionInfoContainer: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
    // minHeight: '100%',
    flexDirection: 'column',
    // padding: 5,
    // borderTopWidth: 2,
    justifyContent: 'space-evenly',
    flexBasis: '40%',
  },
  headerContainer_productInfo_nutriScore: {
    padding: 5,
    flexBasis: '50%',
    justifyContent: 'center',
    flex: 1,
  },
  nutriScore: {
    alignSelf: 'center',
    // flex: 1,
    width: 150,
    resizeMode: 'contain',
    height: 55,
  },
});
