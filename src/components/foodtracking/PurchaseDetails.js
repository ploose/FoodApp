import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { ProductPreview } from '..';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';

import { colors } from '../../styles';
import ProductDetails from './ProductDetails';
import { nutriScoreIamgeProvider } from '../../helpers/nutriScoreImageProvider';

export default function PurchaseDetails(props) {
  console.log('props', JSON.stringify(props.route.params));
  let purchaseDetails = props.route.params;
  console.log('props', props.route);

  let [SwipeablePanelActive, setSwipablePanelActive] = useState(false);

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
          {nutriScoreIamgeProvider('B')}
        </View>
      </View>
      <View style={styles.lastPurchaseBoxSection3}>
        <Text
          style={[styles.lastPurchaseBoxSection3_Text, { flexBasis: '45%' }]}
        >
          Produkt
        </Text>
        <Text
          style={[styles.lastPurchaseBoxSection3_Text, { flexBasis: '11%' }]}
        >
          Menge
        </Text>
        <Text
          style={[styles.lastPurchaseBoxSection3_Text, { flexBasis: '17%' }]}
        >
          Preis
        </Text>
        <Text
          style={[styles.lastPurchaseBoxSection3_Text, { flexBasis: '27%' }]}
        >
          Bewertung
        </Text>
      </View>
      <View style={styles.lastPurchaseBoxSection4}>
        <FlatList
          keyExtractor={item => item.id}
          data={getProductsArray(purchaseDetails.products)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.openPanel}>
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

      <View style={styles.lastPurchaseBoxSection}></View>
      <SwipeablePanel
        fullWidth
        isActive={SwipeablePanelActive}
        onClose={this.closePanel}
        onlySmall
        smallPanelHeight={600}
        showCloseButton
        closeOnTouchOutside
        onPressCloseButton={this.closePanel}
      >
        <ProductDetails />
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
  lastPurchaseBoxSection2: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexBasis: '20%',
  },
  purchaseDetailsInfo: {
    flexBasis: '50%',
    padding: 5,
  },
  lastPurchaseBoxSection4: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexBasis: '60%',
  },
  lastPurchaseBoxSection3: {
    flexBasis: '5%',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    marginHorizontal: 10,
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
  lastPurchaseBoxSection: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    flexBasis: '40%',
  },

  nutriScoreContainer: {
    padding: 5,
    flexBasis: '50%',
    justifyContent: 'center',
    flex: 1,
  },
});
