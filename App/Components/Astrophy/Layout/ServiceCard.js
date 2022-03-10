import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ServiceCard = props => {
  return (
    <View style={styles.cardView}>
      <Image source={props.imgsrc} style={styles.cardImg} />
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardText}>{props.textDetails}</Text>
      <Text style={styles.cardMore} onPress={props.clickAction}>
        {props.linkMore}
      </Text>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  cardView: {
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    //height: 235,
    margin: 10,
    width: 165,
    padding: 15,
  },
  cardImg: {width: 50, height: 50, borderRadius: 100},
  cardTitle: {
    //backgroundColor: 'green',
    color: '#0A0E17',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    width: 150,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#0A0E17',
    textAlign: 'center',
    marginTop: 5,
  },
  cardMore: {
    color: '#E84A56',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
