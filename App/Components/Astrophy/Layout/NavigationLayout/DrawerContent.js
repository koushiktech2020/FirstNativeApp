import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import Navigation from '@Navigation';

const DrawerContent = ({...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1D3557'}}>
      <DrawerContentScrollView {...props} scrollEnabled={true}>
        <View
          style={{
            height: 120,
            width: '100%',
            justifyContent: 'center',
            //backgroundColor: '#0204A3',
            //marginTop: -4,
            //borderBottomRightRadius: 30,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
              }}
              style={{height: 60, width: 60, borderRadius: 100}}
            />
            <View style={{flexDirection: 'column', marginHorizontal: 5}}>
              <Text style={{fontFamily: 'Roboto-Bold', color: '#ffffff'}}>
                Alex Martin
              </Text>
              <Text style={{fontFamily: 'Roboto-Bold', color: '#ffffff'}}>
                alexmartin102@gmail.com
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginVertical: 10,
            }}>
            <Text style={{fontFamily: 'Roboto-Bold', color: '#ffffff'}}>
              Kolkata
            </Text>
            <Icon
              name="edit"
              type="Feather"
              style={{fontSize: 20, color: '#ffffff'}}
            />
          </View> */}
        </View>

        {/* <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="user"
            type="FontAwesome"
            style={{color: 'red', fontSize: 17}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: '#000000',
              marginHorizontal: 10,
            }}>
            My Account
          </Text>
        </Pressable>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#a9a9a9',
            width: '95%',
            alignSelf: 'flex-end',
          }}></View>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="category"
            type="MaterialIcons"
            style={{color: 'red', fontSize: 17}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: '#000000',
              marginHorizontal: 10,
            }}>
            Category
          </Text>
        </Pressable>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#a9a9a9',
            width: '95%',
            alignSelf: 'flex-end',
          }}></View>

        <Pressable
          onPress={() => Navigation.navigate('MyOrder')}
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="box"
            type="FontAwesome5"
            style={{color: 'red', fontSize: 17}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: '#000000',
              marginHorizontal: 10,
            }}>
            My Orders
          </Text>
        </Pressable>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#a9a9a9',
            width: '95%',
            alignSelf: 'flex-end',
          }}></View>

        <Pressable
          onPress={() => Navigation.navigate('Cart')}
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="shopping-cart"
            type="Feather"
            style={{color: 'red', fontSize: 17}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: '#000000',
              marginHorizontal: 10,
            }}>
            My Cart
          </Text>
        </Pressable>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#a9a9a9',
            width: '95%',
            alignSelf: 'flex-end',
          }}></View>

        <Pressable
          onPress={() => Navigation.navigate('Favorite')}
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="heart"
            type="AntDesign"
            style={{color: 'red', fontSize: 17}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: '#000000',
              marginHorizontal: 10,
            }}>
            My Favorites
          </Text>
        </Pressable> */}

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#a9a9a9',
            width: '100%',
            //alignSelf: 'flex-end',
          }}></View>
        {/* <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon name="home" type="AntDesign" style={styles.iconStyle} />
          <Text
            onPress={() => {
              Navigation.navigate('Home');
            }}
            style={styles.navItems}>
            Home
          </Text>
        </Pressable> */}
        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon name="profile" type="AntDesign" style={styles.iconStyle} />
          <Text
            onPress={() => {
              Navigation.navigate('Profile');
            }}
            style={styles.navItems}>
            My Profile
          </Text>
        </Pressable>
        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon name="setting" type="AntDesign" style={styles.iconStyle} />
          <Text
            onPress={() => {
              Navigation.navigate('Settings');
            }}
            style={styles.navItems}>
            Settings
          </Text>
        </Pressable>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="customerservice"
            type="AntDesign"
            style={styles.iconStyle}
          />
          <Text
            onPress={() => {
              Navigation.navigate('FAQ');
            }}
            style={styles.navItems}>
            FAQ
          </Text>
        </Pressable>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="customerservice"
            type="AntDesign"
            style={styles.iconStyle}
          />
          <Text
            onPress={() => {
              Navigation.navigate('FAQs');
            }}
            style={styles.navItems}>
            FAQs
          </Text>
        </Pressable>

        {/* <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#000000',
              marginHorizontal: 10,
            }}>
            Privacy Policy
          </Text>
        </Pressable>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#000000',
              marginHorizontal: 10,
            }}>
            Terms & Conditions
          </Text>
        </Pressable>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#000000',
              marginHorizontal: 10,
            }}>
            Notifications
          </Text>
        </Pressable>

        <Pressable
          style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#000000',
              marginHorizontal: 10,
            }}>
            Log Out
          </Text>
        </Pressable> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  iconStyle: {color: '#fff', fontSize: 20},
  navItems: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
});
