import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Icon} from 'native-base';
import HeaderLayout from './Layout/HeaderLayout';
import SearchLayout from './Layout/SearchLayout';
import ProductList from './Layout/ProductList';
import Navigation from '../../Navigation';

const AstroProducts = () => {
  const onMenuClick = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={{flex: 1}}>
      <HeaderLayout
        title="Products"
        iconName="menu"
        iconType="Feather"
        actionBack={onMenuClick}
      />
      <SearchLayout />
      <View style={styles.prodMainView}>
        <Text style={{color: '#A3AABA'}}>Sort By</Text>
        <View style={styles.addView}>
          <Text style={styles.newText}>Newly Added</Text>
          <Icon name="arrowdown" type="AntDesign" style={{fontSize: 22}} />
        </View>
      </View>
      <ProductList />
    </View>
  );
};

export default AstroProducts;

const styles = StyleSheet.create({
  prodMainView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 30,
    //backgroundColor: 'green',
    marginHorizontal: 10,
    marginTop: 10,
  },
  addView: {
    borderColor: '#EDEDED',
    borderWidth: 1,
    flexDirection: 'row',
    //backgroundColor: 'red',
    height: 30,
    width: 130,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newText: {
    color: '#0A0E17',
  },
});
