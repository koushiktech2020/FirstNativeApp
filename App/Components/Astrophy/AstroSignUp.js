import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {Icon} from 'native-base';
import Navigation from '../../Navigation';

const AstroSignUp = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: 25,
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
        Sign Up
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
          marginTop: 20,
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
          marginTop: 20,
          marginHorizontal: 20,
          paddingLeft: 15,
        }}
        placeholder="Password"
        placeholderTextColor="#989897"
        secureTextEntry={true}
      />

      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: '#E84A56',
          marginHorizontal: 20,
          height: 52,
          borderRadius: 6,
          //alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5,
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Sign up</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Navigation.navigate('Login');
        }}
        style={{
          flexDirection: 'row',
          marginTop: 18,
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
          //paddingHorizontal: 10,
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

export default AstroSignUp;

const styles = StyleSheet.create({});
