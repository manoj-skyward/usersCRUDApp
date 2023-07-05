import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import api, {ACCESS_TOKEN} from '../api/api';

const Users = ({navigation}) => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Manoj1'},
    {id: 2, name: 'Manoj2'},
    {id: 3, name: 'Manoj3'},
    {id: 4, name: 'Manoj4'},
    {id: 5, name: 'Manoj5'},
    {id: 6, name: 'Manoj6'},
    {id: 7, name: 'Manoj7'},
    {id: 8, name: 'Manoj8'},
    {id: 9, name: 'Manoj9'},
  ]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('\n\n Response is \n\n', response.data);
      setUsers(response.data);
      setLoaded(true);
    } catch (err) {
      setLoaded(false);
      console.log('\n\n Something Went Wrong\n\n', err);
    }
  };

  const deleteUser = async id => {
    setLoaded(false);
    try {
      let response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('\n\n User Deleted Successfully \n\n', response);
      getAllUsers();
      Alert.prompt('User Deleted Successfully');
    } catch (err) {
      console.log('\n\n Error in Deleteing User\n\n', err);
    }
  };

  const _renderUserCard = item => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddUpdateUser', {user: item, isUpdate: true})
        }>
        <View
          id={item.id}
          style={{
            marginVertical: 5,
            width: '95%',
            height: 200,
            borderRadius: 10,
            backgroundColor: '#b6bccc',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <View style={{width: '20%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Name: </Text>
            </View>
            <View
              style={{
                width: '80%',
                alignItems: 'flex-start',
                backgroundColor: 'yewllow',
              }}>
              <Text style={{textAlign: 'left', fontSize: 17}}>
                {item.name}{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <View style={{width: '20%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Email: </Text>
            </View>
            <View
              style={{
                width: '80%',
                alignItems: 'flex-start',
                backgroundColor: 'yewllow',
              }}>
              <Text style={{textAlign: 'left', fontSize: 17}}>
                {item.email}{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <View style={{width: '20%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Gender: </Text>
            </View>
            <View
              style={{
                width: '80%',
                alignItems: 'flex-start',
                backgroundColor: 'yewllow',
              }}>
              <Text style={{textAlign: 'left', fontSize: 17}}>
                {item.gender}{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 10,
            }}>
            <View style={{width: '20%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Status: </Text>
            </View>
            <View
              style={{
                width: '80%',
                alignItems: 'flex-start',
                backgroundColor: 'yewllow',
              }}>
              <Text style={{textAlign: 'left', fontSize: 17}}>
                {item.status}{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
              // marginBottom: 20,
              // marginRight: 10,
              // backgroundColor: 'yellow',
            }}>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Image
                source={require('../res/images/delete.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  marginRight: 10,
                  // backgroundColor: 'pink',
                  marginBottom: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        marginLeft: 8,
      }}>
      {loaded ? (
        <>
          <FlatList
            // horizontal={true}
            data={users}
            renderItem={({item}) => _renderUserCard(item)}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
};

export default Users;
