import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';
import { Nutriscore } from '../../helpers/nutriScores';
import { nutriScoreImageProvider } from '../../helpers/nutriScoreImageProvider';

export default function ProductPreview(props: {
  id: string,
  price: string,
  quantity: string,
  isLast: boolean,
  nutriScore: Nutriscore,
}) {
  return (
    <View
      style={[styles.productBox, { borderBottomWidth: props.isLast ? 0 : 2 }]}
    >
      <Text style={styles.product}>{props.id}</Text>
      <Text style={styles.quantity}>{props.quantity}</Text>
      <Text style={styles.price}>{parseFloat(props.price).toFixed(2)}</Text>
      <View style={styles.nutriScore}>
        {nutriScoreImageProvider(props.nutriScore)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    margin: 5,
    padding: 5,
    borderColor: colors.black,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    width: '45%',
  },
  quantity: {
    width: '12%',
  },
  price: {
    width: '8%',
  },
  nutriScore: {
    aspectRatio: 1024 / 555,
    width: '20%',
  },
});
