import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Icon} from 'native-base';
import Addtocart from '../../Components/CartComponents/Addtocart';
//import Cartheader from '../../Components/CartComponents/Cartheader';
import Mainproduct from '../../Components/CartComponents/Mainproduct';
import Rating from '../../Components/CartComponents/Rating';
import CartText from '../../Components/CartComponents/CartText';
//import Navigation from '@Navigation';

const Cart = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {/* Header part */}
        <View style={styles.cartIcon}>
          <Icon
            name="cross"
            type="Entypo"
            style={{color: '#878988'}}
            onPress={() => navigation.goBack()}
          />
        </View>

        {/* main section start */}
        <Mainproduct />

        {/* Rating Section Start */}
        <Rating />

        {/* Details Section Start */}
        <CartText />

        {/* Add to Cart Section Start */}
        <Addtocart />
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartIcon: {
    height: 30,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
