import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const Ecommerce = () => {
  return (
    <View style={styles.header}>
      <Icon name="user" type="EvilIcons" style={styles.headerIcon} />
      <Text style={styles.headerText}>ROZKETTA</Text>
      <Icon name="shoppingcart" type="AntDesign" style={styles.headerIcon} />
    </View>
  );
};

export default Ecommerce;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#03093A',
    height: 75,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  headerIcon: {
    color: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: '',
  },
});
