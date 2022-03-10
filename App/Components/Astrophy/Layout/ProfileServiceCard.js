import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from 'native-base';

const ProfileServiceCard = props => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.imgStyle} source={props.shopImg} />
      <View style={styles.prodRating}>
        <Icon name="star" type="FontAwesome" style={styles.prodIconStar} />
        <Text>{props.rating}</Text>
        <Icon name="heart" type="AntDesign" style={styles.prodIconHeart} />
      </View>
      <Text style={styles.textHeading}>{props.nameOfShop}</Text>
      <Text style={styles.textPrice}>{props.priceShop}</Text>
      <View style={styles.customerSection}>
        <Image source={props.customerImage} style={styles.profileImage} />
        <Text style={styles.customerName}>{props.Name}</Text>
      </View>
    </View>
  );
};

export default ProfileServiceCard;

const styles = StyleSheet.create({
  mainView: {
    //marginStart: 20,
    //marginEnd: 20,
    margin: 12.5,
    //marginVertical: 20,
    //backgroundColor: 'pink',
    //height: 280,
    width: 200,
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 10,
  },
  imgStyle: {
    height: 130,
    width: '100%',
    borderRadius: 10,
  },
  prodRating: {
    //backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  prodIconStar: {color: '#F2C94C', fontSize: 20},
  prodIconHeart: {color: '#E84A56', fontSize: 20},
  textHeading: {
    color: '#0A0E17',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 10,
    marginTop: 5,
  },
  textPrice: {
    color: '#E84A56',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 10,
    marginTop: 5,
  },
  customerSection: {
    flexDirection: 'row',
    margin: 10,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  customerName: {
    color: '#A3AABA',
    marginStart: 5,
    fontSize: 18,
  },
});
