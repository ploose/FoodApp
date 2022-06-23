import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

export default function NutritionListEntry(props) {
  // console.log('params', JSON.stringify(props.params));
  // let nutritionDetails = props.params;

  console.log('props', props);

  function getNutritionColor(color) {
    switch (color) {
      case 'red':
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 1000,
              backgroundColor: colors.nutriScore_E,
            }}
          />
        );
      case 'orange':
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 1000,
              backgroundColor: colors.nutriScore_D,
            }}
          />
        );
      case 'yellow':
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 1000,
              backgroundColor: colors.nutriScore_C,
            }}
          />
        );
      case 'green':
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 1000,
              backgroundColor: colors.nutriScore_B,
            }}
          />
        );

      default:
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 1000,
              backgroundColor: 'grey',
            }}
          />
        );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.colorDot}>{getNutritionColor(props.color)}</View>
      <View style={styles.quantity}>
        <Text>{props.quantity}</Text>
      </View>
      <View style={styles.name}>
        <Text>{props.name}</Text>
      </View>

      <View style={styles.description}>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    borderBottomWidth: 1.5,
    marginTop: 15,
    paddingBottom: 5,
  },
  colorDot: {
    flexBasis: '20%',
    paddingLeft: 20,
  },
  quantity: {
    flexBasis: '20%',
  },
  name: {
    flexBasis: '30%',
  },
  description: {
    flexBasis: '30%',
  },
});
