import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from 'native-base';

const ServiceBoutique = () => {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
          }}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#0A0E17', fontSize: 16.5}}>T Boutique</Text>
          <Text style={{color: '#A3AABA', fontSize: 14}}>
            Owner of TarotBoutique555
          </Text>
        </View>
      </View>
      <View style={styles.subview}>
        <Icon name="message" type="MaterialIcons" style={styles.iconStyle} />
        <Text style={{color: '#1D3557', fontSize: 18}}>Contact</Text>
      </View>
    </View>
  );
};

export default ServiceBoutique;

const styles = StyleSheet.create({
  mainView: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 60,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  subview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    width: 90,
  },
  iconStyle: {
    fontSize: 22,
    color: '#1D3557',
  },
});
