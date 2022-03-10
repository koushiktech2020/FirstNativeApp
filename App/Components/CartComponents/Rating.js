import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const Rating = () => {
  return (
    <View>
      <View style={styles.rating}>
        <View style={styles.ratingSection}>
          <Icon name="star" type="FontAwesome" />
          <Icon name="star" type="FontAwesome" />
          <Icon name="star" type="FontAwesome" />
          <Icon name="star" type="FontAwesome" />
          <Icon name="star-half" type="FontAwesome" />
        </View>
        <View style={styles.ratingSection}>
          <Icon
            name="arrow-swap"
            type="Fontisto"
            style={{paddingHorizontal: 10}}
          />
          <Icon name="share" type="Entypo" style={{paddingHorizontal: 10}} />
          <Icon name="heart" type="Feather" style={{paddingHorizontal: 5}} />
        </View>
      </View>

      <View style={{paddingHorizontal: 15}}>
        <Text>1561 Reviews</Text>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    //backgroundColor: 'pink',
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
