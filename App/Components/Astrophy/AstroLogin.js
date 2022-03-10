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
import {CheckBox, Icon} from 'native-base';

const AstroLogin = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <Icon name="menu" type="Entypo" onPress={() => Navigation.openDrawer()} /> */}
      <View
        style={{
          marginTop: 30,
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
        Sign In
      </Text>

      <TextInput
        style={{
          height: 57,
          borderWidth: 1,
          borderColor: '#BFBFBF',
          borderRadius: 6,
          marginTop: 50,
          marginHorizontal: 20,
          paddingLeft: 15,
        }}
        placeholder="Email address"
        placeholderTextColor="#989897"
      />
      <TextInput
        style={{
          height: 57,
          borderWidth: 1,
          borderColor: '#BFBFBF',
          borderRadius: 6,
          marginTop: 27,
          marginHorizontal: 20,
          paddingLeft: 15,
        }}
        placeholder="Password"
        placeholderTextColor="#989897"
        secureTextEntry={true}
      />

      <View
        style={{
          marginLeft: 10,
          marginTop: 26,
          //alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20,
        }}>
        <View
          style={{
            marginLeft: 0,
            flexDirection: 'row',
            width: 150,
            height: 50,
            //backgroundColor: 'green',
            justifyContent: 'space-between',
          }}>
          <CheckBox
            style={{
              height: 22,
              width: 22,
              borderRadius: 5,
              borderColor: '#A3AABA',
            }}
          />
          <Text style={{fontSize: 16.5, color: '#0A0E17'}}>Remember Me</Text>
        </View>
        <Pressable
          onPress={() => {
            Navigation.navigate('ForgotPassword');
          }}>
          <Text style={{fontSize: 18.5, fontWeight: 'bold', color: '#0A0A0A'}}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => {
          Navigation.navigate('Home');
        }}
        style={{
          backgroundColor: '#E84A56',
          marginHorizontal: 20,
          height: 52,
          borderRadius: 6,
          //alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5,
        }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Continue
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Navigation.navigate('SignUp');
        }}
        style={{
          flexDirection: 'row',
          marginTop: 18,
          justifyContent: 'center',
          //backgroundColor: 'skyblue',
        }}>
        <Text style={{fontSize: 19.5, fontWeight: 'bold', color: '#0A0A0A'}}>
          New User?
        </Text>
        <Text
          style={{
            fontSize: 19.5,
            fontWeight: 'bold',
            color: '#E84A56',
            marginLeft: 5,
          }}>
          Sign up
        </Text>
      </Pressable>
      <Text
        style={{
          //backgroundColor: 'skyblue',
          textAlign: 'center',
          fontSize: 16,
          marginTop: 22,
          color: '#B1B1AF',
        }}>
        - Or -
      </Text>
      <Text
        style={{
          //backgroundColor: 'skyblue',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 19,
          color: '#0A0E17',
        }}>
        Continue With
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 28,
          paddingHorizontal: 2,
        }}>
        <View
          style={{
            //backgroundColor: 'yellow',
            flexDirection: 'row',
          }}>
          <Icon
            name="facebook"
            type="Entypo"
            style={{fontSize: 22, color: '#4267B2'}}
          />
          <Text
            style={{
              color: '#4267B2',
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Facebook
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: 'yellow',
            flexDirection: 'row',
          }}>
          <Icon
            name="google"
            type="AntDesign"
            style={{fontSize: 22, color: '#DB4437'}}
          />
          <Text
            style={{
              color: '#DB4437',
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Google
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: 'yellow',
            flexDirection: 'row',
          }}>
          <Icon
            name="apple"
            type="FontAwesome"
            style={{fontSize: 22, color: '#0A0E17'}}
          />
          <Text
            style={{
              color: '#0A0E17',
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Apple
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: 16,
        }}>
        By signing up you agree with our{' '}
      </Text>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: 17,
          color: '#0A0E17',
        }}>
        Terms of Use <Text style={{color: '#B1B1AF'}}>and</Text> Privacy Policy.
      </Text>
      <Text
        style={{
          margin: 18,
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#AFAFAD',
        }}>
        Continue as a Guest
      </Text>
    </View>
  );
};

export default AstroLogin;

const styles = StyleSheet.create({});
