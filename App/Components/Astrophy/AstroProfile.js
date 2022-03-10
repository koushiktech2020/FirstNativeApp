import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ProductCommonLayout from './Layout/ProductCommonLayout';
import HeaderLayout from './Layout/HeaderLayout';
import Navigation from '../../Navigation';
import {Icon} from 'native-base';
import CategoryLayout from './Layout/CategoryLayout';
import ProductLayout from './Layout/ProductLayout';
import ProfileShopLayout from './Layout/ProfileShopLayout';
import ProfileServiceLayout from './Layout/ProfileServiceLayout';

const AstroProfile = () => {
  const onMenuClick = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout
        title="Profile"
        iconName="menu"
        iconType="Feather"
        actionBack={onMenuClick}
      />
      <ScrollView>
        <View style={styles.ProfileInfo}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
            }}
          />
          <View
            style={{
              marginStart: 12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              //backgroundColor: 'green',
              width: '80%',
            }}>
            <View>
              <Text style={{color: '#fff', fontSize: 18}}>Alex Martin</Text>
              <Text style={{color: '#A3AABA', fontSize: 16}}>
                alexmartin102@gmail.com
              </Text>
            </View>
            <Icon style={styles.iconStyle} name="edit-2" type="Feather" />
          </View>
        </View>
        <CategoryLayout title="Favourite Shop" />
        <ProfileShopLayout />
        <CategoryLayout title="Favourite Services" />
        <ProfileServiceLayout />
        <CategoryLayout title="Favourite Products" />
        <ProductLayout />
      </ScrollView>
    </View>
  );
};

export default AstroProfile;

const styles = StyleSheet.create({
  ProfileInfo: {
    marginTop: 15,
    backgroundColor: '#1D3557',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  imgProfile: {
    height: 65,
    width: 65,
    borderRadius: 100,
  },
  iconStyle: {
    color: '#fff',
    fontSize: 22,
  },
});
