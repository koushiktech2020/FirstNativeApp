import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const Image = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="contain"
      source={require('../../Assets/nature.jpg')}>
      <Text>IMAGE</Text>
    </ImageBackground>
  );
};

export default Image;

const styles = StyleSheet.create({});
