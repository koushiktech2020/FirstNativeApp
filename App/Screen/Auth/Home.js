import React from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Icon} from 'native-base';
import Footer from '../../Components/Common/Footer';
import Header from '../../Components/Common/Header';
import Category from '../../Components/UserComponents/Category';
import Banner from '../../Components/UserComponents/Banner';
import RecentView from '../../Components/UserComponents/RecentView';
//import Navigation from '@Navigation';

const Home = ({navigation}) => {
  return (
    <>
      <View>
        <ScrollView>
          <Header />
          <Category />
          <Banner />
          <RecentView />
          {/* <Footer /> */}
          <Pressable
            style={{
              backgroundColor: '#0D8EF5',
              height: 60,
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              elevation: 5,
            }}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={{color: '#fff'}}>Go to Cart</Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
