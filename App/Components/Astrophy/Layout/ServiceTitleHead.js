import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from 'native-base';

const ServiceTitleHead = () => {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.ImageStyle}
        source={{
          uri: 'https://5.imimg.com/data5/FQ/KI/GLADMIN-22814355/astrology-500x500.jpg',
        }}
      />
      <View>
        <View style={styles.rating}>
          <Icon name="star" type="Entypo" style={styles.iconStyle} />
          <Text style={styles.ratingtext}>
            4.6/5 <Text style={{color: '#A3AABA'}}>(124 sales)</Text>
          </Text>
        </View>
        <Text style={styles.titletext}>PsychicAmandaStudio</Text>
        <Text style={styles.descText}>
          Real Answers & Accurate Psychic Readings
        </Text>
      </View>
    </View>
  );
};

export default ServiceTitleHead;

const styles = StyleSheet.create({
  mainView: {
    //backgroundColor: 'skyblue',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingtext: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    color: '#F2C94C',
    fontSize: 20,
  },
  titletext: {
    color: '#0A0E17',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descText: {
    //backgroundColor: 'red',
    color: '#A3AABA',
    fontSize: 16,
    //height: 30,
    width: 240,
  },
});
