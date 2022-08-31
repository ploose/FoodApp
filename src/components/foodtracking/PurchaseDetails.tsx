import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { ProductPreview } from '..';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';

import { colors } from '../../styles';
import ProductDetails from './ProductDetails';
import { nutriScoreImageProvider } from '../../helpers/nutriScoreImageProvider';
import { Nutriscore } from '../../helpers/nutriScores';
import { IProduct, IPurchase } from '../../@types/PurchaseStorage.d';
import { getProductsArray } from '../../helpers/purchaseUtils';

export default function PurchaseDetails(props: {
  route: { params: IPurchase },
}) {
  let purchaseDetails = props.route.params;

  let [SwipeablePanelActive, setSwipablePanelActive] = useState(false);
  let [PanelProduct, setPanelProduct] = useState<IProduct>({
    price: '0',
    quantity: '0',
    id: '0',
    imageUrl: '',
  });

  const openPanel: any = (product: IProduct) => {
    setPanelProduct(product);
    setSwipablePanelActive(true);
  };
  const closePanel = () => {
    setSwipablePanelActive(false);
  };

  return (
    <View style={styles.lastPurchaseBox}>
      <View style={styles.headerBox}>
        <View style={styles.purchaseDetailsInfo}>
          <View style={styles.headerDetails}>
            <Text
              style={[
                styles.headerDetailsText,
                { fontWeight: 'bold', paddingRight: 10 },
              ]}
            >
              {'Geschäft'}
            </Text>
            <Text style={styles.headerDetailsEntries}>
              {purchaseDetails.store}
            </Text>
          </View>
          <View style={styles.headerDetails}>
            <Text
              style={[
                styles.headerDetailsText,
                { fontWeight: 'bold', paddingRight: 10 },
              ]}
            >
              {'Datum'}
            </Text>
            <Text style={styles.headerDetailsEntries}>
              {purchaseDetails.date}
            </Text>
          </View>
          <View style={[styles.headerDetails, { borderBottomWidth: 0 }]}>
            <Text style={[styles.headerDetailsText, { fontWeight: 'bold' }]}>
              {'Kosten'}
            </Text>
            <Text style={styles.headerDetailsEntries}>
              {parseFloat(purchaseDetails.total).toFixed(2)} CHF
            </Text>
          </View>
        </View>
        <View style={styles.nutriScoreContainer}>
          {nutriScoreImageProvider(Nutriscore.B)}
        </View>
      </View>
      <View style={styles.labelBox}>
        <Text style={[styles.labelText, { width: '45%' }]}>Produkt</Text>
        <Text style={[styles.labelText, { width: '12%' }]}>Menge</Text>
        <Text style={[styles.labelText, { width: '8%' }]}>Preis</Text>
        <Text style={[styles.labelText, { width: '20%' }]}>Bewertung</Text>
      </View>
      <View style={styles.productsBox}>
        <FlatList
          keyExtractor={item => item.id}
          data={getProductsArray(purchaseDetails.products)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openPanel(item)}>
              <View>
                <ProductPreview
                  id={item.id}
                  price={item.price}
                  quantity={item.quantity}
                  isLast={false}
                  nutriScore={Nutriscore.A}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.bottomMargin} />
      {/* @ts-ignore  - Due to SwipeablePanel being a js module and expecting no children prop*/}
      <SwipeablePanel
        fullWidth
        isActive={SwipeablePanelActive}
        onClose={closePanel}
        deviceHeight={50}
        showCloseButton
        closeOnTouchOutside
        onPressCloseButton={closePanel}
        style={{ height: '80%' }}
      >
        <ProductDetails product={PanelProduct} />
      </SwipeablePanel>
    </View>
  );
}

const styles = StyleSheet.create({
  lastPurchaseBox: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'column',
  },
  purchaseDetailsInfo: {
    flexBasis: '50%',
    padding: 5,
  },
  bottomMargin: {
    flexBasis: '5%',
  },
  headerBox: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexBasis: '20%',
    borderWidth: 2,
    marginHorizontal: 8,
  },
  labelBox: {
    flexBasis: '5%',
    opacity: 1,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingTop: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  productsBox: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexBasis: '70%',
    marginHorizontal: 8,
  },
  labelText: {
    color: colors.white,
    fontSize: 12,
  },
  headerDetails: {
    padding: 3,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexBasis: '20%',
    borderBottomWidth: 1,
  },
  headerDetailsText: {
    fontSize: 12,
    flexBasis: '35%',
  },
  headerDetailsEntries: {
    fontSize: 12,
    flexBasis: '65%',
  },
  nutriScoreContainer: {
    padding: 5,
    flexBasis: '50%',
    justifyContent: 'center',
    flex: 1,
  },
});
