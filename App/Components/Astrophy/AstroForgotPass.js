import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import Navigation from '../../Navigation';
import {Icon} from 'native-base';

const AstroForgotPass = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 170,
          width: 52,
          height: 52,
          borderRadius: 5,
          backgroundColor: '#E84A56',
          //justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 38,
            fontWeight: 'bold',
          }}>
          A
        </Text>
      </View>

      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: '#0A0A09',
          textAlign: 'center',
          marginTop: 25,
        }}>
        Forgot Password
      </Text>
      <Text
        style={{
          //backgroundColor: 'yellow',
          color: '#A3AABA',
          marginTop: 30,
          marginHorizontal: 20,
          fontSize: 14,
        }}>
        Please provide your registered email address. We will sent reset
        password link to your email address
      </Text>
      <TextInput
        style={{
          height: 55,
          borderWidth: 1,
          borderColor: '#BFBFBF',
          borderRadius: 6,
          marginTop: 30,
          marginHorizontal: 20,
          paddingLeft: 15,
        }}
        placeholder="Email address"
        placeholderTextColor="#989897"
      />
      <Pressable
        style={{
          marginTop: 22,
          backgroundColor: '#E84A56',
          marginHorizontal: 20,
          height: 52,
          borderRadius: 6,
          //alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5,
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Navigation.navigate('Login');
        }}
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          //backgroundColor: 'skyblue',
        }}>
        <Text style={{fontSize: 19.5, fontWeight: 'bold', color: '#0A0A0A'}}>
          Already have account?
        </Text>
        <Text
          style={{
            fontSize: 19.5,
            fontWeight: 'bold',
            color: '#E84A56',
            marginLeft: 5,
          }}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default AstroForgotPass;

const styles = StyleSheet.create({});
