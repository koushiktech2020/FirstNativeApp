import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import {Icon} from 'native-base';

const Template = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F84667'}}>
      <Text style={[styles.header, {color: '#ADD8E6'}]}>First App</Text>
      <Image
        style={{height: 50, width: 50, borderRadius: 100}}
        source={require('../../Assets/nature.jpg')}
      />
      <View
        style={{
          width: '100%',
          height: '80%',
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={[styles.header, {color: '#A52A2A'}]}>Sign In</Text>

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          autoCapitalize="none"
          placeholderTextColor="white"
        />

        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*********"
          secureTextEntry={true}
          placeholderTextColor="white"
        />

        <Pressable
          style={{
            backgroundColor: '#0D8EF5',
            height: 50,
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            elevation: 5,
          }}>
          <Icon name="sign-in" type="FontAwesome" style={{color: 'red'}} />
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Template;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 8,
    color: '#a9a9a9',
    borderRadius: 14,
    fontSize: 14,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  header: {
    // textAlign: 'center',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
