import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoryLayout = props => {
  return (
    <View style={styles.cateView}>
      <Text style={styles.categoryTitle}>{props.title}</Text>
      <Text style={styles.categoryAll}>View all</Text>
    </View>
  );
};

export default CategoryLayout;

const styles = StyleSheet.create({
  cateView: {
    flexDirection: 'row',
    margin: 20,
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {color: '#000000', fontSize: 19, fontWeight: 'bold'},
  categoryAll: {color: '#A3AABA', fontSize: 16.5},
});
