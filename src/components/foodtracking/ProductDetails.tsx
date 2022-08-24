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
        <Image
          style={styles.headerContainer_image}
          source={{
            uri:
              'https://image.migros.ch/mo-boxed/v-w-480-h-360/10df3d2acfe3401edc25152be98627285f821d50/kartoffelbrot-mit-nuessen-ip-suisse.jpg',
          }}
        />

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
          color={'green'}
          quantity={'5.6g'}
          name={'Fett'}
          description={'Kleine Menge'}
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
          WEIZENmehl*, Wasser, BAUMNÜSSE 14%, ROGGENmehl* 7%, Kartoffelflocken*
          5%, Hefe, WEIZENprotein, Kochsalz jodiert, Sonnenblumenöl, Zucker,
          GERSTENmalzmehl, Kartoffelstärke, Mehlbehandlungsmittel:
          Ascorbinsäure. * in IP-SUISSE Qualität
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productInfoContainer: {
    backgroundColor: colors.primary
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
