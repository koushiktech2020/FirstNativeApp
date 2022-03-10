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

const Signin1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E2E5E5'}}>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 35,
        }}>
        <Text style={styles.header}>Hello</Text>
        <Text style={styles.subHeader}>Sign in to your Account</Text>
      </View>
      <View style={{flex: 2, marginTop: 45}}>
        <TextInput
          style={styles.input}
          placeholder="Marcin"
          autoCapitalize="none"
          placeholderTextColor="#424848"
        />
        <TextInput
          style={styles.input}
          placeholder="*********"
          secureTextEntry={true}
          placeholderTextColor="#424848"
        />
        <Text style={{alignSelf: 'flex-end', marginRight: 20}}>
          Forgot Your Password?
          <Text style={{fontWeight: 'bold'}}>Click Here!</Text>
        </Text>

        <View
          style={{
            color: 'rgba(0, 0, 0, 0.5)',
            marginLeft: '60%',
            fontSize: 25,
            marginTop: 10,
          }}>
          <Text
            style={{
              marginLeft: 22,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
            }}>
            Sign in
          </Text>
          <Pressable style={styles.btn}>
            <Text style={{color: '#fff'}}>➡</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 25,
          alignSelf: 'center',
          //justifyContent: 'center',
          //alignContent: 'center',
          //alignItems: 'center',
        }}>
        <Text style={styles.bottom}>Dont have Account??Create</Text>
      </View>
    </View>
  );
};

export default Signin1;

const styles = StyleSheet.create({
  header: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#021F1D',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 5,
    color: '#021F1D',
  },
  input: {
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 25,
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#B2B5B5',
    //borderBottomWidth: 1,
    //borderBottomColor: 'red',
  },
  btn: {
    marginLeft: '60%',
    marginBottom: 30,
    backgroundColor: '#F59B51',
    width: 50,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: -30,
  },
  bottom: {
    fontSize: 18,
  },
});
