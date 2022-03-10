import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from '../../../Navigation';

const ServiceProviderHead = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        marginHorizontal: 20,
        //backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
        Top Service Provider
      </Text>
      <Text
        style={{color: '#A3AABA', fontSize: 17}}
        onPress={() => {
          Navigation.navigate('ServiceProviderDetails');
        }}>
        View all
      </Text>
    </View>
  );
};

export default ServiceProviderHead;

const styles = StyleSheet.create({});
