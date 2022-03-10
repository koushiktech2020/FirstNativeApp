import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

const SettingsLayout = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={{color: '#0A0E17', fontSize: 20}}>{props.texttitle}</Text>
      <Switch
        trackColor={{false: '#A3AABA', true: '#A3AABA'}}
        thumbColor={isEnabled ? '#33D198' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SettingsLayout;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    paddingVertical: 5,
  },
});
