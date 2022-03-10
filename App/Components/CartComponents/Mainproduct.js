import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Mainproduct = () => {
  return (
    <View style={styles.cartMainProduct}>
      <Image
        style={styles.cartMainProductImage}
        source={{
          uri: 'https://static.dezeen.com/uploads/2020/08/xiaomi-mi-tv-lux-technology-design_dezeen_2364_col_0-852x500.jpg',
        }}
      />
      <Text style={styles.cartProductName}>Tv & Electronics</Text>
      <Text style={styles.cartProductText}>TV XaoMI LED MI 55</Text>
      <Text style={styles.cartProductText}>UHD 4k(L55M5-5ARU)</Text>
      <Text style={styles.cartproductPrice}>11,999 $</Text>
    </View>
  );
};

export default Mainproduct;

const styles = StyleSheet.create({
  cartMainProduct: {
    height: 350,
    alignItems: 'center',
    //justifyContent: 'space-between',
    padding: 10,
  },
  cartMainProductImage: {
    height: 200,
    width: '80%',
    borderRadius: 5,
  },
  cartProductName: {
    fontSize: 16,
    color: '#16302D',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingTop: 8,
  },
  cartProductText: {color: 'black', fontSize: 20},
  cartproductPrice: {color: 'green', fontSize: 20, fontWeight: 'bold'},
});
