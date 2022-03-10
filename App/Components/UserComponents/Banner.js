import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
  return (
    <View style={styles.container}>
      {/* <Swiper showsButtons={true}>
        <View style={styles.slideContainer}>
          <Text>Hello</Text>
        </View>
        <View style={styles.slideContainer}>
          <Image />
        </View>
        <View style={styles.slideContainer}></View>
      </Swiper> */}
      <Swiper
        loop
        autoplay={true}
        autoplayTimeout={5}
        showPagination
        dot={<View style={styles.dotView} />}
        activeDot={<View style={styles.activeDotView} />}>
        <Image
          source={{
            uri: 'https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg',
          }}
          style={styles.containerSlide}
          resizeMode="contain"
        />

        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-vector/online-shopping-concept-perfect-landing-260nw-1654537690.jpg',
          }}
          style={styles.containerSlide}
          resizeMode="contain"
        />
        <Image
          style={styles.containerSlide}
          source={{
            uri: 'https://image.shutterstock.com/image-vector/vector-white-shop-online-sign-260nw-1695240010.jpg',
          }}
          resizeMode="contain"
        />
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  containerSlide: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  dotView: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDotView: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});
