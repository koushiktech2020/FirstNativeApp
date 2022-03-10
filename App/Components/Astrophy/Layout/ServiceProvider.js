import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import ServiceProviderHead from './ServiceProviderHead';
import ServiceProviderPerson from './ServiceProviderPerson';
import Navigation from '../../../Navigation';

const ServiceProvider = () => {
  const redirectTo = () => {
    Navigation.navigate('ServiceProvider');
  };
  return (
    <View style={styles.serviceProviderView}>
      <ServiceProviderHead />
      <View style={styles.serviceProviderBlock}>
        <ServiceProviderPerson
          imgsrc={{
            uri: 'https://3.imimg.com/data3/DG/GL/MY-10132293/tarot-card-reading-250x250.jpg',
          }}
          personname="Robert Santon"
          personwork="Tarot Reading"
          clickAction={redirectTo}
        />
        <ServiceProviderPerson
          imgsrc={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHYZAovqCKB1yn3wCgD5b8tRg0AOoZTEnlw&usqp=CAU',
          }}
          personname="Livia Westervelt"
          personwork="Psychic Reading"
          clickAction={redirectTo}
        />
      </View>
    </View>
  );
};

export default ServiceProvider;

const styles = StyleSheet.create({
  serviceProviderView: {backgroundColor: '#1D3557', height: 300, marginTop: 20},
  serviceProviderBlock: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 10,
  },
});
