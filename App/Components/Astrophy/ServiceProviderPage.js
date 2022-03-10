import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import ServiceSearchType from './Layout/ServiceSearchType';
import ServiceTitleHead from './Layout/ServiceTitleHead';
import ServiceBoutique from './Layout/ServiceBoutique';
import ServiceProviderDescDetails from './Layout/ServiceProviderDescDetails';
import SortingLayout from './Layout/SortingLayout';
import SearchLayout from './Layout/SearchLayout';
import ServiceCategoryLayout from './Layout/ServiceCategoryLayout';
import Navigation from '../../Navigation';
import ShopServiceLayout from './Layout/ShopServiceLayout';
import ServiceComments from './Layout/ServiceComments';

const ServiceProviderPage = () => {
  const ComeBack = () => {
    Navigation.back();
  };
  return (
    <View style={{flex: 1}}>
      <HeaderLayout
        title="Service Provider"
        iconName="left"
        iconType="AntDesign"
        actionBack={ComeBack}
      />
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
      <ScrollView>
        <View style={styles.categoryStyle}>
          <ServiceSearchType
            iconName="hearto"
            iconType="AntDesign"
            desc="Favourite Shop (2.5K)"
            styleType={styles.typeStyle1}
          />
          <ServiceSearchType
            iconName="shoppingcart"
            iconType="AntDesign"
            desc="9600 Sales"
            styleType={styles.typeStyle2}
          />
        </View>
        <ServiceTitleHead />
        <View style={styles.locationStyle}>
          <Icon name="location" type="Ionicons" style={styles.iconStyle} />
          <Text style={{color: '#1D3557', fontSize: 17.5}}>
            Toronto, Canada
          </Text>
        </View>
        <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
        <Text
          style={{
            color: '#A3AABA',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 14,
          }}>
          Last updated on 19 Mar, 2021
        </Text>
        <ServiceBoutique />
        <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
        <Text
          style={{
            color: '#A3AABA',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 14,
          }}>
          Descriptions
        </Text>
        <ServiceProviderDescDetails />
        <Text style={styles.readStyle}>Read More</Text>
        <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
        <SortingLayout />
        <SearchLayout />
        <ServiceCategoryLayout />
        <ShopServiceLayout />
        <Text
          style={{
            //backgroundColor: 'blue',
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 20,
            color: '#0A0E17',
            fontWeight: 'bold',
          }}>
          Load More
        </Text>
        <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
        <Text
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            color: '#A3AABA',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Reviews
        </Text>
        <View style={styles.innerView}>
          <Text style={styles.textInnerStyle}>Sort By:</Text>
          <View style={styles.innerSubView}>
            <Text style={styles.subtext}>Newly Added</Text>
            <Icon name="down" type="AntDesign" style={styles.iconstyle} />
          </View>
        </View>
        <ServiceComments />
        <Text
          style={{
            margin: 20,
            textAlign: 'right',
            fontSize: 18,
            color: '#A3AABA',
          }}>
          View More
        </Text>
      </ScrollView>
    </View>
  );
};

export default ServiceProviderPage;

const styles = StyleSheet.create({
  categoryStyle: {
    //backgroundColor: 'green',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 15,
    width: 320,
  },
  typeStyle1: {
    backgroundColor: '#A3AABA',
    borderRadius: 25,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 185,
  },
  typeStyle2: {
    backgroundColor: '#A3AABA',
    borderRadius: 25,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 125,
  },
  locationStyle: {
    flexDirection: 'row',
    //marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 22,
    color: '#E84A56',
    marginRight: 10,
  },
  readStyle: {
    marginHorizontal: 20,
    color: '#A3AABA',
    textAlign: 'right',
  },
  textInnerStyle: {
    color: '#A3AABA',
    fontSize: 16,
    marginEnd: 10,
  },
  innerView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
    //justifyContent: 'space-between',
    //width: 190,
  },
  subtext: {
    color: '#000000',
    fontSize: 18,
  },
  innerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#EDEDED',
    borderWidth: 1,
    height: 35,
    padding: 4,
    //width: 170,
    //backgroundColor: 'green',
  },
  iconstyle: {
    fontSize: 24,
  },
});
