import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

const ServiceProviderPerson = props => {
  return (
    <View>
      <Pressable style={styles.personView} onPress={props.clickAction}>
        <Image style={styles.personImg} source={props.imgsrc} />
        <Text style={styles.personName}>{props.personname}</Text>
        <Text style={styles.personWork}>{props.personwork}</Text>
        <Text style={styles.rating}>
          4.6/5 <Text style={{color: '#C3C3C1'}}>(124 sales)</Text>
        </Text>
        <Text style={styles.more}>View More</Text>
      </Pressable>
    </View>
  );
};

export default ServiceProviderPerson;

const styles = StyleSheet.create({
  personView: {
    backgroundColor: '#fff',
    height: 180,
    width: 165,
    alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  personImg: {
    height: 55,
    width: 55,
    borderRadius: 100,
    marginTop: -30,
    marginBottom: 15,
  },
  personName: {color: '#0A0E17', fontSize: 20, fontWeight: 'bold'},
  personWork: {fontSize: 14, color: '#0A0E17', marginTop: 10},
  rating: {color: '#0A0E17', marginTop: 10},
  more: {
    color: '#E84A56',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
