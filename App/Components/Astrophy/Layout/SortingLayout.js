import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const SortingLayout = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>Shop Service</Text>
      <View style={styles.innerView}>
        <Text style={styles.textInnerStyle}>Sort By:</Text>
        <View style={styles.innerSubView}>
          <Text style={styles.subtext}>Newly Added</Text>
          <Icon name="down" type="AntDesign" style={styles.iconstyle} />
        </View>
      </View>
    </View>
  );
};

export default SortingLayout;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInnerStyle: {
    color: '#A3AABA',
    fontSize: 14,
    marginEnd: 10,
  },
  innerView: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
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
