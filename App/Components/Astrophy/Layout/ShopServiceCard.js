import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {Icon} from 'native-base';

const ShopServiceCard = props => {
  return (
    <View style={styles.loopView}>
      <View style={styles.container}>
        <Image source={props.imgsrc} style={styles.shopListImg} />
      </View>
      <View style={styles.shopRating}>
        <View style={styles.shopSubRating}>
          <Icon name="star" type="FontAwesome" style={styles.shopIconStar} />
          <Text style={{color: '#0A0E17'}}>4.6/5</Text>
        </View>
        <Icon name="heart" type="EvilIcons" style={styles.shopIconHeart} />
      </View>
      <Text style={styles.shopItemtitle}>{props.title}</Text>
      <Text style={styles.shopItemPrice}>{props.price}</Text>
    </View>
  );
};

export default ShopServiceCard;

const styles = StyleSheet.create({
  loopView: {
    borderWidth: 1,
    borderColor: '#C7C7C7',
    borderRadius: 10,
    margin: 10,
  },
  shopListImg: {height: 120, width: 166, borderRadius: 10},
  shopRating: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  shopSubRating: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    width: 60,
    justifyContent: 'space-between',
  },
  shopIconStar: {color: '#F2C94C', fontSize: 20},
  shopIconHeart: {color: '#A3AABA', fontSize: 25},
  shopItemtitle: {
    fontSize: 17,
    paddingLeft: 10,
    marginTop: 10,
    color: '#0A0E17',
    //backgroundColor: 'pink',
    width: 165,
  },
  shopItemPrice: {
    fontSize: 17,
    paddingLeft: 10,
    marginVertical: 10,
    color: '#E84A56',
  },
  container: {
    //backgroundColor: 'green',
    height: 120,
  },
});
