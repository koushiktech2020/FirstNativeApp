import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {Icon} from 'native-base';

const ProductCommonLayout = props => {
  return (
    <View style={styles.loopView}>
      <View style={styles.container}>
        <Image source={props.imgsrc} style={styles.prodListImg} />
      </View>
      <View style={styles.prodRating}>
        <View style={styles.prodSubRating}>
          <Icon name="star" type="FontAwesome" style={styles.prodIconStar} />
          <Text style={{color: '#0A0E17'}}>4.6/5</Text>
        </View>
        <Icon name="heart" type="FontAwesome" style={styles.prodIconHeart} />
      </View>
      <Text style={styles.prodItemtitle}>{props.title}</Text>
      <Text style={styles.prodItemPrice}>₹ 00.00</Text>
      <Pressable style={styles.prodCart}>
        <Text style={styles.cartText}>{props.cartTextItem}</Text>
      </Pressable>
    </View>
  );
};

export default ProductCommonLayout;

const styles = StyleSheet.create({
  loopView: {
    //backgroundColor: 'green',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 10,
    margin: 12.5,
    width: 168,
  },
  prodListImg: {height: 120, width: 166, borderRadius: 10},
  prodRating: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  prodSubRating: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    width: 60,
    justifyContent: 'space-between',
  },
  prodIconStar: {color: '#F2C94C', fontSize: 20},
  prodIconHeart: {color: '#E84A56', fontSize: 20},
  prodItemtitle: {
    fontSize: 17,
    paddingLeft: 10,
    marginTop: 10,
    color: '#0A0E17',
    //backgroundColor: 'pink',
    width: 165,
  },
  prodItemPrice: {
    fontSize: 17,
    paddingLeft: 10,
    marginTop: 10,
    color: '#0A0E17',
  },
  prodCart: {
    marginTop: 10,
    height: 43,
    width: '100%',
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    //elevation: 5,
  },
  cartText: {
    fontSize: 18,
    color: '#E84A56',
    fontWeight: 'bold',
  },
  container: {
    //backgroundColor: 'green',
    height: 120,
  },
});
