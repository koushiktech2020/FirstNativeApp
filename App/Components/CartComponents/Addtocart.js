import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {Icon} from 'native-base';

const Addtocart = () => {
  const Cart = () => {
    alert('Please check');
  };
  return (
    <View>
      <View style={styles.addCart}>
        <Pressable style={styles.cartButton} onPress={Cart}>
          <Icon name="shoppingcart" type="AntDesign" style={{color: '#fff'}} />
          <Text style={styles.addtocartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Addtocart;

const styles = StyleSheet.create({
  addCart: {
    //backgroundColor: '#DEE1DE',
    height: 80,
    width: '100%',
    justifyContent: 'center',
  },
  cartButton: {
    backgroundColor: '#07A314',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
    flexDirection: 'row',
  },
  addtocartText: {fontSize: 20, color: '#fff', paddingLeft: 10},
});
