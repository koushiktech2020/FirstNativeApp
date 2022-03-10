import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Simple = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={{color: '#fff', fontSize: 25}}>This is Footer</Text>
    </View>
  );
};

export default Simple;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#06B127',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
