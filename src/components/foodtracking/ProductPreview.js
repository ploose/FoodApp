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
      {/* <View style={styles.purchaseDetailsInfo}>
          <View style={styles.nameContainer}>
            <Text style={[styles.name, { fontWeight: 'bold' }]}>
              {'Geschäft'}
            </Text>
            <Text style={styles.name}>{purchaseDetails.store}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={[styles.date, { fontWeight: 'bold' }]}>{'Datum'}</Text>
            <Text style={styles.date}>{purchaseDetails.date}</Text>
          </View>
          <View style={styles.costContainer}>
            <Text style={[styles.cost, { fontWeight: 'bold' }]}>
              {'Kosten'}
            </Text>
            <Text style={styles.cost}>{purchaseDetails.total}</Text>
          </View>
        </View> */}
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
    // justifyContent: "space-evenly",
    // padding: 5,
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
    // flex: 1,
    width: 110,
    resizeMode: 'contain',
    height: 45,
    flexBasis: '35%',
  },
});
