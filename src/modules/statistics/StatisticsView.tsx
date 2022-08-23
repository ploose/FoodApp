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
  SafeAreaView,
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
import { categoriesLeft, categoriesRight } from './Categories';
import { color } from 'react-native-reanimated';

// Code based on https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/interactive-chart/index.js

function Statistics() {
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <Text style={styles.tileTitles}>Deine letzten 10 Einkäufe</Text>
            <StatisticsChart purchases={purchases} />
          </View>
        </View>
        <View style={styles.piechartContainer}>
          <View style={styles.piechart}>
            <Text style={styles.tileTitles}>Kategorien</Text>
            <StatisticsPieChart />
            <View style={styles.categoryPanelsContainer}>
              <View style={styles.leftCategoryColumn}>
                {categoriesLeft.map((item, idx) => (
                  <CategoryPanel
                    bandColor={item.color}
                    key={idx}
                    logo={item.logo}
                    categoryName={item.categoryName}
                    percent={item.percent}
                    total={item.total}
                  />
                ))}
              </View>
              <View style={styles.rightCategoryColumn}>
                {categoriesRight.map((item, idx) => (
                  <CategoryPanel
                    bandColor={item.color}
                    key={idx}
                    logo={item.logo}
                    categoryName={item.categoryName}
                    percent={item.percent}
                    total={item.total}
                  />
                ))}
              </View>
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
            // borderRadius: 2, borderColor: colors.black, borderWidth: 2,
            // elevation: 1
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
  tileTitles: {
    color: colors.black,
    paddingLeft: 15,
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chart: {
    // borderWidth: 2,
    // borderRadius: 5,
    // backgroundColor: colors.white
  },
  chartContainer: {
    marginHorizontal: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 2,
    marginTop: 5,
    paddingBottom: 12,
  },
  piechartContainer: {
    marginHorizontal: 8,
  },
  piechart: {
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#fff',
    // shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 60,
    paddingBottom: 5,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  categoryPanelsContainer: {
    flex: 1,
    // alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row'
  },
  leftCategoryColumn: {
    width: '50%',
  },
  rightCategoryColumn: {
    width: '50%',
  }
});
