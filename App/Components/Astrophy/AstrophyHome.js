import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import {Icon} from 'native-base';
import Navigation from '../../Navigation';
import HeaderLayout from './Layout/HeaderLayout';
import SearchLayout from './Layout/SearchLayout';
import CategoryLayout from './Layout/CategoryLayout';
import ServiceType from './Layout/ServiceType';
import ServiceProvider from './Layout/ServiceProvider';
import ProductLayout from './Layout/ProductLayout';
import LatestBlog from './Layout/LatestBlog';

const AstrophyHome = () => {
  const onMenuClick = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout
        title="Astrophy"
        iconName="menu"
        iconType="Feather"
        actionBack={onMenuClick}
      />
      <SearchLayout />
      <ScrollView>
        <CategoryLayout title="Service Category" />
        <ServiceType />
        <ServiceProvider />
        <CategoryLayout title="Spell Casting" />
        <ServiceType />
        <CategoryLayout title="Our Products" />
        <ProductLayout />
        <CategoryLayout title="Latest blogs" />
        <LatestBlog />
      </ScrollView>
    </View>
  );
};

export default AstrophyHome;

const styles = StyleSheet.create({});
