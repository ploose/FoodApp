/* eslint-disable class-methods-use-this */
import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';

import { Purchase } from '../../components';
import { colors } from '../../styles';
import PurchaseDetails from '../../components/foodtracking/PurchaseDetails';
import { PurchaseStorageContext } from '../../context/PurchaseStorageContext';
import {
  IPurchase,
  PurchaseStorageContextType,
} from '../../@types/PurchaseStorage.d';
import { HistoryRootTabParamList } from '../navigation/ParamLists';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Nutriscore } from '../../helpers/nutriScores';

import { custom_sort } from '../../helpers/purchaseUtils';

type historyViewProp = StackNavigationProp<
  HistoryRootTabParamList,
  'HistoryView'
>;

function sortProducts(purchases: IPurchase[]) {
  const jsonFile = purchases;
  let productArray = [];
  for (const element in jsonFile) {
    jsonFile[element].id = element;
    productArray.push(jsonFile[element]);
  }
  productArray.sort(custom_sort);

  return productArray;
}

function HistoryView({ navigation }: { navigation: historyViewProp }) {
  const context: PurchaseStorageContextType | null = useContext(
    PurchaseStorageContext,
  );
  let purchases: IPurchase[];
  if (!context) {
    purchases = [];
  } else {
    purchases = context.purchases;
    purchases = sortProducts(purchases);
  }

  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={purchases}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PurchaseDetails', item)}
          >
            <View style={styles.purchaseView}>
              <Purchase
                name={item.store}
                date={item.date}
                cost={item.total}
                score={Object.values(Nutriscore)[index % 5]}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default function HistoryScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryView"
        component={HistoryView}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          title: 'Verlauf',
        }}
      />
      <Stack.Screen
        name="PurchaseDetails"
        component={PurchaseDetails}
        options={{
          headerShown: true,
          title: 'Details',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  sldiePanel: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeaderCloseText: {
    textAlign: 'center',
    alignSelf: 'flex-end',
    paddingLeft: 5,
    paddingRight: 15,
  },
  purchaseView: {
    padding: 8,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});
