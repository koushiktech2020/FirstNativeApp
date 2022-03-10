import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Navigation from '../../../Navigation';
const HeaderLayout = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.leftView}>
        <Icon
          onPress={props.actionBack}
          name={props.iconName}
          type={props.iconType}
          style={styles.MainIcon}
        />
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.rightView}>
        <Icon name="shoppingcart" type="AntDesign" style={styles.MainIcon} />
        <Icon name="bell" type="Fontisto" style={styles.MainIcon} />
      </View>
    </View>
  );
};

export default HeaderLayout;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
  },
  leftView: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    //width: 90,
    justifyContent: 'space-between',
  },
  rightView: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    width: 72,
    justifyContent: 'space-between',
  },
  MainIcon: {fontSize: 30, color: '#0A0E17'},
  titleText: {fontSize: 22, color: 'black', marginLeft: 10},
});
