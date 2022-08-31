// @ts-nocheck
import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import {
  IPurchase,
  PurchaseStorageContextType,
} from '../../@types/PurchaseStorage.d';
import StatisticsChart from './StatisticsChart';
import { PurchaseStorageContext } from '../../context/PurchaseStorageContext';
import StatisticsPieChart from './StatisticsPieChart';
import CategoryPanel from './CategoryPanel';
import { colors } from '../../styles';
import { categoriesLeft, categoriesRight } from './Categories';

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
                    color={item.color}
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
                    color={item.color}
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
    backgroundColor: colors.primary,
  },
  tileTitles: {
    color: colors.black,
    paddingLeft: 15,
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginHorizontal: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 2,
    marginTop: 5,
    paddingBottom: 12,
    elevation: 5,
  },
  piechartContainer: {
    marginHorizontal: 8,
    elevation: 5,
  },
  piechart: {
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOpacity: 1,
    shadowRadius: 60,
    paddingBottom: 5,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  categoryPanelsContainer: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  leftCategoryColumn: {
    width: '50%',
  },
  rightCategoryColumn: {
    width: '50%',
  },
});
