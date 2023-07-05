import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashMessage} from '../Utils';

const Login = ({navigation}) => {
  //   console.log(route.params.user.email);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#aaa8ad',
      }}>
      <View
        style={{
          width: '100%',
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 100,
          }}>
          Please Login to Continue
        </Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Name"
          placeholderTextColor={'grey'}
          style={{
            color: 'black',
            borderColor: '#000',
            width: '90%',
            borderRadius: 5,
            height: 40,
            borderWidth: 1,
            marginVertical: 20,
          }}
        />
        <TextInput
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'grey'}
          style={{
            color: 'black',
            borderColor: '#000',
            width: '90%',
            borderRadius: 5,
            height: 40,
            borderWidth: 1,
            marginVertical: 20,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 30,
          width: '70%',
          marginBottom: 20,
          backgroundColor: '#2e2b33',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (name === '') {
            SplashMessage('Please Enter Name');
          } else if (email === '' || !email.includes('@')) {
            SplashMessage('Please Enter a valid email');
          } else {
            navigation.navigate('UserDashboard');
          }
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
