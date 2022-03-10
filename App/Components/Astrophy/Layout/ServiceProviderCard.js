import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {Icon} from 'native-base';

const ServiceProviderCard = props => {
  return (
    <View style={styles.serviceMainView}>
      <View style={styles.container}>
        <Image source={props.imgsrc} style={styles.serviceListImg} />
      </View>
      <View style={styles.serviceRating}>
        <View style={styles.serviceSubRating}>
          <Icon name="star" type="FontAwesome" style={styles.serviceIconStar} />
          <Text style={{color: '#0A0E17'}}>4.6/5</Text>
        </View>
        <Icon name="heart" type="EvilIcons" style={styles.serviceIconHeart} />
      </View>
      <Text style={styles.serviceTitle}>{props.shopName}</Text>
      <View style={styles.subServiceProvider}>
        <Image style={styles.serviceProviderImg} source={props.imagePerson} />
        <Text style={styles.serviceProviderName}>{props.personName}</Text>
      </View>
    </View>
  );
};

export default ServiceProviderCard;

const styles = StyleSheet.create({
  serviceMainView: {
    //backgroundColor: 'green',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 10,
    margin: 12.5,
    width: 168,
  },
  serviceListImg: {height: 120, width: 166, borderRadius: 10},
  serviceRating: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  serviceSubRating: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    width: 60,
    justifyContent: 'space-between',
  },
  serviceIconStar: {color: '#F2C94C', fontSize: 20},
  serviceIconHeart: {color: '#A3AABA', fontSize: 25},
  serviceTitle: {
    fontSize: 17,
    paddingLeft: 10,
    marginTop: 10,
    color: '#0A0E17',
    //backgroundColor: 'pink',
    width: 165,
  },
  subServiceProvider: {
    //backgroundColor: 'orange',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 60,
  },
  serviceProviderImg: {height: 40, width: 40, borderRadius: 100},
  serviceProviderName: {color: '#A3AABA', fontSize: 16},
  container: {
    //backgroundColor: 'green',
    height: 120,
  },
});
