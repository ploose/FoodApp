import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { View, Text, Image } from 'react-native-ui-lib';

export default function ProductPreview(props) {
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
  },
  product: {
    flexBasis: '45%',
  },
  quantity: {
    flexBasis: '12%',
  },
  price: {
    flexBasis: '8%',
  },
  nutriScore: {
    alignSelf: 'center',
    width: 110,
    resizeMode: 'contain',
    height: 45,
    flexBasis: '35%',
  },
});
