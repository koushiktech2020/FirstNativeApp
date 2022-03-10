import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Icon} from 'native-base';

const SearchLayout = () => {
  return (
    <View style={styles.mainSearch}>
      <Icon name="search" type="EvilIcons" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#A3AABA"
        style={styles.searchText}
      />
    </View>
  );
};

export default SearchLayout;

const styles = StyleSheet.create({
  mainSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 22.5,
    marginTop: 15,
    marginHorizontal: 20,
    paddingLeft: 10,
    height: 52,
  },
  searchIcon: {fontSize: 30, color: '#A3AABA'},
  searchText: {fontSize: 20, color: '#000000'},
});
