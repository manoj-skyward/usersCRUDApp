import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import api, {ACCESS_TOKEN} from '../api/api';
import {SplashMessage} from '../Utils';

const AddUpdateUser = ({route, navigation}) => {
  //   console.log(route.params.user.email);

  const isUpdate = route?.params?.isUpdate || false;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log('\n\n Inside UseEffect 1\n\n');
    if (isUpdate) {
      console.log('\n\n Inside UseEffect 3\n\n');

      setName(route?.params?.user?.name);
      setEmail(route?.params?.user?.email);
      setGender(route?.params?.user?.gender);
      setStatus(route?.params?.user?.status);
    }
    console.log('\n\n Inside UseEffect 2\n\n');
  }, []);

  const addUser = async () => {
    const userObj = {
      name,
      email,
      gender,
      status,
    };
    try {
      let resp = await api.post('/users', JSON.stringify(userObj), {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      SplashMessage('User Added Successfully');
      setName('');
      setEmail('');
      setGender('');
      setStatus('');
      navigation.navigate('Users', {refresh: true});
    } catch (err) {
      SplashMessage('Somehting Went Wrong');
      console.log('\n\n Error Occured while adding User\n\n', err);
    }
  };

  const updateUser = async () => {
    const userObj = {
      name,
      email,
      gender,
      status,
    };
    const userID = route?.params?.user?.id;
    try {
      let resp = await api.put(`/users/${userID}`, JSON.stringify(userObj), {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      SplashMessage('User Updated Successfully');
      setName('');
      setEmail('');
      setGender('');
      setStatus('');
      navigation.navigate('Users', {refresh: true});
    } catch (err) {
      SplashMessage('Somehting Went Wrong');
      console.log('\n\n Error Occured while Updating User\n\n', err);
    }
  };
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
        <TextInput
          value={gender}
          onChangeText={text => setGender(text.toString())}
          placeholder="Gender"
          placeholderTextColor={'grey'}
          style={{
            color: 'black',
            borderColor: '#000',
            width: '90%',
            borderRadius: 5,
            marginVertical: 20,
            height: 40,
            borderWidth: 1,
          }}
        />
        <TextInput
          value={status}
          onChangeText={text => setStatus(text)}
          placeholder="Status"
          placeholderTextColor={'grey'}
          style={{
            color: 'black',
            borderColor: '#000',
            width: '90%',
            borderRadius: 5,
            marginVertical: 20,
            height: 40,
            borderWidth: 1,
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
          } else if (gender !== 'male' && gender !== 'female') {
            SplashMessage('Gender can be either male or female');
          } else if (status !== 'active' && status !== 'inactive') {
            SplashMessage('Status can be active or inactive only');
          } else {
            if (isUpdate) {
              updateUser();
            } else addUser();
          }
        }}>
        {/* <View style={{}}> */}
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {' '}
          {isUpdate ? 'Update User' : 'Add User'}
        </Text>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default AddUpdateUser;
