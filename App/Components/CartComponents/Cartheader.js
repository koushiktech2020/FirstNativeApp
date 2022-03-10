import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const Cartheader = ({navigation}) => {
  return (
    <View style={styles.cartIcon}>
      <Icon
        name="cross"
        type="Entypo"
        style={{color: '#878988'}}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Cartheader;

const styles = StyleSheet.create({
  cartIcon: {
    height: 30,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
