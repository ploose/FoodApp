import React from 'react';
import { Image } from 'react-native';
import { colors } from '../../styles';
import { CategoryPanelProps } from './CategoryPanel';

export enum CategoriesColor {
  Öle = '#FFEB39',
  Getreide = '#FFA722',
  FastFood = '#F62B1C',
  Früchte = '#2ED479',
  Gemüse = '#88FA4D',
  Süssigkeiten = '#FF53CF',
  Milchprodukte = '#3DD0FF',
}
export const categories: CategoryPanelProps[] = [
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/burger.png')}
      />
    ),
    categoryName: 'Fast Food',
    percent: 20,
    total: 20.2,
    color: CategoriesColor.FastFood,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/apfel.png')}
      />
    ),
    categoryName: 'Früchte',
    percent: 20,
    total: 40.5,
    color: CategoriesColor.Früchte,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/vegetable.png')}
      />
    ),
    categoryName: 'Gemüse',
    percent: 20,
    total: 18.3,
    color: CategoriesColor.Gemüse,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/sweets.png')}
      />
    ),
    categoryName: 'Süssigkeiten',
    percent: 20,
    total: 102.3,
    color: CategoriesColor.Süssigkeiten,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/rice.png')}
      />
    ),
    categoryName: 'Getreide',
    percent: 20,
    total: 70.55,
    color: CategoriesColor.Getreide,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/dairy-products.png')}
      />
    ),
    categoryName: 'Milchprodukte',
    percent: 20,
    total: 140.25,
    color: CategoriesColor.Milchprodukte,
  },
  {
    logo: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assets/images/categories/olive-oil.png')}
      />
    ),
    categoryName: 'Öle',
    percent: 20,
    total: 8.9,
    color: CategoriesColor.Öle,
  },
];
