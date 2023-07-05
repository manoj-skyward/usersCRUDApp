import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import api from '../api/api';

const AddUpdateUser = ({route}) => {
  console.log(route.params);

  const isUpdate = route?.params?.isUpdate || false;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  if (isUpdate) {
    setName(route?.params?.user?.name);
    setEmail(route?.params?.user?.email);
    setGender(route?.params?.user?.gender);
    setStatus(route?.params?.user?.status);
  }

  const generateUniqueID = () => {
    const id = Math.ceil(Date.now() + Math.random());
    console.log('\n\n ID is \n\n', id);
    addUser(id);
  };

  const addUser = async id => {
    const userObj = {
      id,
      name,
      email,
      gender,
      status,
    };
    try {
      let resp = await api.post('/user', JSON.stringify(userObj));
      console.log('\n\n User added Successfully\n\n');
    } catch (err) {
      console.log('\n\n Error Occured while adding User\n\n', err);
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
          onChangeText={text => setGender(text)}
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
        onPress={generateUniqueID}>
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
