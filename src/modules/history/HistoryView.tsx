/* eslint-disable class-methods-use-this */
import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import moment from 'moment';

import { Purchase } from '../../components';
import { colors } from '../../styles';
import PurchaseDetails from '../../components/foodtracking/PurchaseDetails';
import { PurchaseStorageContext } from '../../context/PurchaseStorageContext';
import {
  IPurchase,
  PurchaseStorageContextType,
} from '../../@types/PurchaseStorage.d';
import {
  RootTabParamList,
  HistoryRootTabParamList,
} from '../navigation/ParamLists';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Nutriscore } from '../../helpers/nutriScores';

function custom_sort(b: any, a: any) {
  return (
    moment(a.date, 'DD/MM/YYYY')
      .toDate()
      .getTime() -
    moment(b.date, 'DD/MM/YYYY')
      .toDate()
      .getTime()
  );
}

// const { purchases, updatePurchase } = React.useContext(PurchaseStorageContext) as PurchaseStorageContextType;

function getPurchases() {
  // console.log("Purchases", purchases);

  // const options = {
  //   method: 'GET',
  // };
  // return fetch('http://10.0.2.2:5000/getData')
  //   .then(response => response.json())
  //   .then(json => {
  //     return console.log(json);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  const jsonFile = require('./data.json');
  let myArray = [];
  for (const element in jsonFile) {
    jsonFile[element].id = element;
    myArray.push(jsonFile[element]);
  }
  myArray.sort(custom_sort);

  return myArray;
}

type historyViewProp = StackNavigationProp<
  HistoryRootTabParamList,
  'HistoryView'
>;

function HistoryView({ navigation }: { navigation: historyViewProp }) {
  const context: PurchaseStorageContextType | null = useContext(
    PurchaseStorageContext,
  );
  let purchases: IPurchase[];
  if (!context) {
    purchases = [];
  } else {
    purchases = context.purchases;
  }

  let abc = true;

  return (
    <View>
      <FlatList
        keyExtractor={item => item.time}
        data={purchases}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PurchaseDetails', item)}
          >
            <View style={styles.purchaseView}>
              <Purchase
                name={item.store}
                date={item.date}
                cost={item.total}
                score={Nutriscore.A}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

type historyScreenProp = StackNavigationProp<RootTabParamList, 'Verlauf'>;

export default function HistoryScreen({
  navigation,
}: {
  navigation: historyScreenProp,
}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryView"
        component={HistoryView}
        options={{ headerShown: false }}
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
