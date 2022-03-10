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

const Signup1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E2E5E5'}}>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.Header}>Create Account</Text>
      </View>
      <View style={{flex: 2, marginTop: 15}}>
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#424848"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          placeholderTextColor="#424848"></TextInput>

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
            Create
          </Text>
          <Pressable style={styles.btn}>
            <Text style={{color: '#fff'}}>➡</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup1;

const styles = StyleSheet.create({
  Header: {
    fontSize: 33,
    color: '#021F1D',
  },
  input: {
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 22,
    fontSize: 22,
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
});
