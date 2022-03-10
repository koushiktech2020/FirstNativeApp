import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const ServiceSearchType = props => {
  return (
    <View style={props.styleType}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        style={styles.iconStyle}
      />
      <Text style={styles.textStyle}>{props.desc}</Text>
    </View>
  );
};

export default ServiceSearchType;

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 22,
    color: '#fff',
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
  },
});
