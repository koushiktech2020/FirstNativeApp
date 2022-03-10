import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import SettingsLayout from './Layout/SettingsLayout';

const AstroSettings = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout title="Settings" iconName="menu" iconType="Feather" />
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 20}} />
      <SettingsLayout texttitle="Setting 1" />
      <Text style={{marginHorizontal: 20, color: '#A3AABA', fontSize: 17}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
        nibh cursus.
      </Text>
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 20}} />
      <SettingsLayout texttitle="Setting 2" />
      <Text style={{marginHorizontal: 20, color: '#A3AABA', fontSize: 17}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
        nibh cursus.
      </Text>
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 20}} />
      <SettingsLayout texttitle="Setting 3" />
      <Text style={{marginHorizontal: 20, color: '#A3AABA', fontSize: 17}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
        nibh cursus.
      </Text>
    </View>
  );
};

export default AstroSettings;

const styles = StyleSheet.create({});
