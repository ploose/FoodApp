import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';

import { colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Purchase from '../../components/foodtracking/PurchaseListEntry';
import { Nutriscore } from '../../helpers/nutriScores';
import { ProductPreview } from '../../components';
import { getProductsArray } from '../../helpers/purchaseUtils';
import { useContext } from 'react';
import {
  IProduct,
  IPurchase,
  PurchaseStorageContextType,
} from '../../@types/PurchaseStorage.d';
import { PurchaseStorageContext } from '../../context/PurchaseStorageContext';
import { useState } from 'react';
import ProductDetails from '../../components/foodtracking/ProductDetails';

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

  let [SwipeablePanelActive, setSwipablePanelActive] = useState(false);
  let [PanelProduct, setPanelProduct] = useState<IProduct>({
    price: '0',
    quantity: '0',
    id: '0',
  });

  const openPanel: any = (product: IProduct) => {
    setPanelProduct(product);
    setSwipablePanelActive(true);
  };
  const closePanel = () => {
    setSwipablePanelActive(false);
  };

  const context: PurchaseStorageContextType | null = useContext(
    PurchaseStorageContext,
  );
  let purchases: IPurchase[];
  if (!context) {
    purchases = [];
  } else {
    purchases = context.purchases;
  }

  //Mock Data Generation - Loops through purchases until it find 5 random products.
  function generateMockData(purchases: IPurchase[]) {
    let productsArray: IProduct[] = [];
    let topCounter = 0;
    for (const index in purchases) {
      if (Object.prototype.hasOwnProperty.call(purchases, index)) {
        const purchase = purchases[index];
        let products = getProductsArray(purchase.products);
        productsArray = [...productsArray, ...products];
      }
    }
    return productsArray;
  }
  let topProducts: IProduct[] = [];
  let flopProducts: IProduct[] = [];
  let productsArray = generateMockData(purchases);
  if (productsArray != []) {
    topProducts = productsArray.slice(0, 5);
    flopProducts = productsArray.slice(5, 10);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.headerText}>
          <Text size={20} color={colors.white}>
            Derzeitiger Score
          </Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>A</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.lastPurchaseSection}>
          <Text style={styles.productsTitle}>Letzter Einkauf</Text>
          <Purchase
            name={'Migros Altstätten'}
            date={'20.01.2022'}
            cost={'123.40'}
            score={Nutriscore.C}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.productsTitle}>
            Deine gesündesten Produkte der letzten 10 Einkäufe
          </Text>
          <View style={styles.topSection}>
            {topProducts.map((item, idx) => (
              <TouchableOpacity onPress={() => openPanel(item)}>
                <View>
                  <ProductPreview
                    key={idx}
                    id={item.id}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.productsTitle}>
            Deine ungesündesten Produkte der letzten 10 Einkäufe
          </Text>
          <View style={styles.bottomSection}>
            {flopProducts.map((item, idx) => (
              <TouchableOpacity onPress={() => openPanel(item)}>
                <View>
                  <ProductPreview
                    key={idx}
                    id={item.id}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* <View style={{height: 20}}/> */}
      </ScrollView>
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
        style={{ height: '80%', elevation: -1000 }}
      >
        <View style={{ elevation: 21000 }}>
          <ProductDetails product={PanelProduct} />
        </View>
      </SwipeablePanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 515,
    alignItems: 'center',
  },
  scoreCircle: {
    paddingTop: 20,
    marginTop: 10,
    backgroundColor: colors.nutriScore_A,
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
    marginTop: -510,
  },
  lastPurchaseSection: {
    marginHorizontal: 8,
    marginTop: 15,
    paddingBottom: 15,
  },
  section: {
    marginHorizontal: 8,
    // width: '100%'
    // backgroundColor: colors.white,
    // marginBottom: 50
  },
  topSection: {
    marginBottom: 15,
    borderColor: colors.black,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
  bottomSection: {
    borderColor: colors.black,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
  productsTitle: {
    fontWeight: 'bold',
  },
});
