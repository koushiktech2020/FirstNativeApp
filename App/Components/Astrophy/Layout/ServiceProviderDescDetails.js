import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ServiceProviderDescDetails = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyles}>
        Shop Hours when I'm available 9am to 9pm Est Mon-Sun Also Available On
        Holidays But Expect A Slightly Longer Wait On Holidays. (Please Check My
        Shop For New Services & Items There Will Be New Things Soon To Come)
      </Text>
      <Text style={styles.innerTextStyle}>WHY CHOOSE ME AS YOUR PSYCHIC?</Text>
      <Text style={styles.textStyles}>
        -Over 7 Years On Etsy(With Both Continous Clients & New Clients) - #1
        Rated Psychic Shop On Etsy -Most Reviewed Psychic On Etsy -Credibility
        I'm a Full Time Psychic With Studio Est In Toronto For Over 15 Years -I
        Practice What I Preach(Daily
        Meditations-Mantras-Yogas-Prayer-Fasting-Abstanance) To Better Connect
        With Spirit To Provide Better Messages For You!
      </Text>
    </View>
  );
};

export default ServiceProviderDescDetails;

const styles = StyleSheet.create({
  mainView: {
    margin: 20,
  },
  textStyles: {
    color: '#0A0E17',
    fontSize: 16.5,
  },
  innerTextStyle: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A0E17',
  },
});
