// @ts-nocheck
import React, { MutableRefObject, useContext, useRef, useState } from 'react';
import { LineChart, PieChart, XAxis } from 'react-native-svg-charts';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GridView, TouchableOpacity } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryContainer,
} from 'victory-native';

import {
  IPurchase,
  PurchaseStorageContextType,
} from '../../@types/PurchaseStorage.d';
import StatisticsChart from './StatisticsChart';
import { PurchaseStorageContext } from '../../context/PurchaseStorageContext';
import StatisticsPieChart from './StatisticsPieChart';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import CategoryPanel from './CategoryPanel';
import { colors, fonts } from '../../styles';
import { categories } from './Categories';


// Code based on https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/interactive-chart/index.js

export default function Statistics() {
  const context: PurchaseStorageContextType | null = useContext(
    PurchaseStorageContext,
  );
  let purchases: IPurchase[];
  if (!context) {
    purchases = [];
  } else {
    purchases = context.purchases;
  }
  return (
  
   
      <ScrollView keyboardShouldPersistTaps="handled">
        
        <View style={styles.container}>
          <View style={styles.chartContainer}>
            <Text style={{ color: colors.white }}>
              Deine letzten 10 Einkäufe
            </Text>
            <View style={styles.chart}>
              <StatisticsChart purchases={purchases} />
            </View>
          </View>
          <View style={styles.piechartContainer}>
            <Text>Kategorien</Text>

            <View style={styles.piechart}>
              <StatisticsPieChart />
              <View style={styles.categoryPanelsContainer}>
                <FlatList
                  // style={{backgroundColor:colors.green}}
                  data={categories}
                  renderItem={({ item }) => (
                    // <Pressable>
                    <CategoryPanel
                      bandColor={item.color}
                      logo={item.logo}
                      categoryName={item.categoryName}
                      percent={item.percent}
                      total={item.total}
                    />
                    // </Pressable>
                  )}
                  keyExtractor={item => item.categoryName}
                  numColumns={2}
                  key={item => item.categoryName}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

  );
}

type statisticsScreenProp = StackNavigationProp<RootTabParamList, 'Verlauf'>;


export default function StatisticsScreen({
  navigation,
}: {
  navigation: statisticsScreenProp,
}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
    
      <Stack.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerShown: true,
          title: 'Statistik',
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
    // paddingTop: 10,
    // padding: 3,
    backgroundColor: colors.primary,
    // borderRadius: 20,
    // height: 1000
  },
  chart: {
    borderWidth: 2,
    borderRadius: 5,
  },
  chartContainer: {
    // margin: 8,
    backgroundColor: colors.white
  },
  piechartContainer: {
    // margin: 8,
  },
  piechart: {
    borderWidth: 2,
    borderRadius: 5,
    // height: '60%',
    shadowColor: '#fff',
    // shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 60,
    backgroundColor: colors.white,
  },
  piechart2: {
    borderWidth: 2,
    // backgroundColor: '#000',
    borderRadius: 5,
    height: 5,
    // height: '60%',
  },
  categoryPanelsContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
