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

export default function PurchaseDetails(props: { route: { params: IPurchase } }) {
  let purchaseDetails = props.route.params;

  let [SwipeablePanelActive, setSwipablePanelActive] = useState(false);
  let [PanelProduct, setPanelProduct] = useState<IProduct | undefined>();

  console.log("Params", purchaseDetails);
  
  const openPanel:any = (product: IProduct) => {
    setPanelProduct(product)
    setSwipablePanelActive(true);
  };
  const closePanel = () => {
    setSwipablePanelActive(false);
  };

  function getProductsArray(products: { [x: string]: any }) {
    let myArray = [];
    for (const element in products) {
      products[element].id = element;
      myArray.push(products[element]);
    }
    return myArray;
  }

  return (
    <View style={styles.lastPurchaseBox}>
      <View style={styles.lastPurchaseBoxSection2}>
        <View style={styles.purchaseDetailsInfo}>
          <View style={styles.purchaseDetailsInfo_labelContainer}>
            <Text
              style={[
                styles.purchaseDetailsInfo_labelContainer_title,
                { fontWeight: 'bold', paddingRight: 10 },
              ]}
            >
              {'Geschäft'}
            </Text>
            <Text style={styles.purchaseDetailsInfo_labelContainer_value}>
              {purchaseDetails.store}
            </Text>
          </View>
          <View style={styles.purchaseDetailsInfo_labelContainer}>
            <Text
              style={[
                styles.purchaseDetailsInfo_labelContainer_title,
                { fontWeight: 'bold', paddingRight: 10 },
              ]}
            >
              {'Datum'}
            </Text>
            <Text style={styles.purchaseDetailsInfo_labelContainer_value}>
              {purchaseDetails.date}
            </Text>
          </View>
          <View
            style={[
              styles.purchaseDetailsInfo_labelContainer,
              { borderBottomWidth: 0 },
            ]}
          >
            <Text
              style={[
                styles.purchaseDetailsInfo_labelContainer_title,
                { fontWeight: 'bold' },
              ]}
            >
              {'Kosten'}
            </Text>
            <Text style={styles.purchaseDetailsInfo_labelContainer_value}>
              {purchaseDetails.total}
            </Text>
          </View>
        </View>
        <View style={styles.nutriScoreContainer}>
          {nutriScoreImageProvider(Nutriscore.B)}
        </View>
      </View>
      <View style={styles.lastPurchaseBoxSection3}>
        <Text style={[styles.lastPurchaseBoxSection3_Text, { width: '45%' }]}>
          Produkt
        </Text>
        <Text style={[styles.lastPurchaseBoxSection3_Text, { width: '12%' }]}>
          Menge
        </Text>
        <Text style={[styles.lastPurchaseBoxSection3_Text, { width: '8%' }]}>
          Preis
        </Text>
        <Text style={[styles.lastPurchaseBoxSection3_Text, { width: '20%' }]}>
          Bewertung
        </Text>
      </View>
      <View style={styles.lastPurchaseBoxSection4}>
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
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.lastPurchaseBoxSection} />
      {/* @ts-ignore  - Due to SwipeablePanel being a js module and expecting no children prop*/}
      <SwipeablePanel
        fullWidth
        isActive={SwipeablePanelActive}
        onClose={closePanel}
        // onlyLarge
        // smallPanelHeight={400}
        // panelHeight={200}
        deviceHeight={50}
        showCloseButton
        closeOnTouchOutside
        onPressCloseButton={closePanel}
        style={{height: '80%'}}
      >
        <ProductDetails
        product={PanelProduct} />
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

  lastPurchaseBoxSection: {
    flexBasis: '5%',
  },
  lastPurchaseBoxSection2: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexBasis: '20%',
    borderWidth: 2,
  },
  lastPurchaseBoxSection3: {
    flexBasis: '5%',
    opacity: 1,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingTop: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  lastPurchaseBoxSection4: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexBasis: '70%',
  },
  lastPurchaseBoxSection3_Text: {
    color: colors.white,
    fontSize: 12,
  },
  purchaseDetailsInfo_labelContainer: {
    padding: 3,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexBasis: '20%',
    borderBottomWidth: 1,
  },
  purchaseDetailsInfo_labelContainer_title: {
    fontSize: 12,
    flexBasis: '35%',
  },
  purchaseDetailsInfo_labelContainer_value: {
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
