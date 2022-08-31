import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';
import NutritionListEntry from './NutritionListEntry';

import { nutriScoreImageProvider } from '../../helpers/nutriScoreImageProvider';
import { Nutriscore } from '../../helpers/nutriScores';
import { IProduct } from '../../@types/PurchaseStorage.d';

type props = {
  product: IProduct,
};

export default function ProductDetails(props: props) {
  const product = props.product;

  return (
    <View style={styles.productInfoContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer_image_container}>
          <Image
            style={styles.headerContainer_image}
            source={{
              uri: product.imageUrl,
            }}
          />
        </View>

        <View style={styles.headerContainer_productInfo}>
          <Text style={{ fontWeight: 'bold' }}>{product.id}</Text>
          <Text style={{ fontSize: 13 }}>Menge: {product.quantity}</Text>
          {/* <Text style={{ fontSize: 13 }}></Text> */}

          <View style={styles.headerContainer_productInfo_nutriScore}>
            {nutriScoreImageProvider(Nutriscore.A)}
          </View>
        </View>
      </View>

      <View style={styles.nutritionInfoContainer}>
        <Text style={{ fontWeight: 'bold' }}>Nährwerte pro 100g</Text>
        <NutritionListEntry
          color={'red'}
          quantity={'5.6g'}
          name={'Fett'}
          description={'Hohe Menge'}
        />
        <NutritionListEntry
          color={'red'}
          quantity={'5.6g'}
          name={'Kohlenhydrate'}
          description={'Hohe Menge'}
        />
        <NutritionListEntry
          color={'green'}
          quantity={'5.6g'}
          name={'Ballaststoffe'}
          description={'Kleine Menge'}
        />
        <NutritionListEntry
          color={'yellow'}
          quantity={'5.6g'}
          name={'Eiweiss'}
          description={'Mittlere Menge'}
        />
        <NutritionListEntry
          color={'red'}
          quantity={'5.6g'}
          name={'Salz'}
          description={'Hohe Menge'}
        />
      </View>

      <View style={styles.nutritionInfoContainer}>
        <Text style={{ fontWeight: 'bold' }}>Inhaltsstoffe</Text>
        <Text>
          Schweinefleisch (Schweiz), Kalbfleisch (Schweiz), Magermilch, Speck
          (Schweiz), Schwarten (Schweiz), jodiertes Kochsalz, Gewürze, Würze,
          Glucose, Hefeextrakt, Antioxidationsmittel: Citronensäure,
          Geschmacksverstärker: Mononatriumglutamat, Stabilisator: Diphosphate,
          Hülle: Schweinedarm.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productInfoContainer: {
    backgroundColor: colors.primary,
  },
  headerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    height: 150,
  },
  headerContainer_image_container: {
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
  headerContainer_image: {
    flex: 1,
    resizeMode: 'contain',
    maxHeight: 90,
    maxWidth: 100,
    transform: [{ scale: 1.25 }],
    aspectRatio: 1,
  },
  headerContainer_productInfo: {
    width: '70%',
  },
  nutritionInfoContainer: {
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  headerContainer_productInfo_nutriScore: {
    padding: 5,
    width: '50%',
    alignContent: 'center',
  },
  nutriScore: {
    aspectRatio: 1024 / 555,
    width: Dimensions.get('window').width / 4,
    height: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
