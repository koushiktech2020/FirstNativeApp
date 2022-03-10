import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const CategoryCard = props => {
  return (
    <Pressable style={styles.mainView} onPress={props.actionSelect}>
      <Text style={styles.textStyle}>{props.textCategory}</Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  mainView: {
    //backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#DADAD9',
    height: 45,
    padding: 10,
    marginEnd: 15,
  },
  textStyle: {
    fontSize: 16.5,
    color: '#000000',
  },
});
