import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

export default function ProductPreview(props: {
  id: string,
  price: string,
  quantity: string,
}) {
  return (
    <View style={styles.productBox}>
      <Text style={styles.product}>{props.id}</Text>
      <Text style={styles.quantity}>{props.quantity}</Text>
      <Text style={styles.price}>{props.price}</Text>
      <Image
        source={require('../../../assets/images/nutriscore/D.png')}
        style={styles.nutriScore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    margin: 5,
    padding: 5,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
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
