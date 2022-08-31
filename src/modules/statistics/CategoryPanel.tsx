import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import { colors } from '../../styles';
import { CategoriesColor } from './Categories';

export type CategoryPanelProps = {
  color: CategoriesColor,
  logo: ReactNode,
  categoryName: string,
  percent: number,
  total: Float,
};

export default function CategoryPanel({
  color,
  logo,
  categoryName,
  percent,
  total,
}: CategoryPanelProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.band, { backgroundColor: color }]} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.logo}>{logo}</View>
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.percent}>{percent}%</Text>
          <Text style={styles.total}>{total.toFixed(2)} CHF</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    margin: 5,
    height: 80,
    backgroundColor: '#F2F2F2',
    elevation: 2,
  },
  band: {
    width: 10,
    height: '100%',
    marginLeft: '5%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignContent: 'space-around',
    flex: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    alignContent: 'center',
    flex: 1,
  },
  logo: {
    width: '35%',
    alignSelf: 'center',
  },
  categoryName: {
    width: '65%',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 11,
  },
  percent: {
    width: '35%',
    alignSelf: 'center',
    fontSize: 11,
    marginLeft: '2%',
  },
  total: {
    width: '65%',
    alignSelf: 'center',
    fontSize: 11,
  },
});
