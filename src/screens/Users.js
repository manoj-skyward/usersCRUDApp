import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import api, {ACCESS_TOKEN} from '../api/api';
import {SplashMessage} from '../Utils';

const Users = ({route, navigation}) => {
  const [users, setUsers] = useState([]);

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
      setLoaded(true);
      console.log('\n\n Something Went Wrong\n\n', err);
    }
  };
  if (route?.params?.refresh) {
    getAllUsers();
  }

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
      SplashMessage('User Deleted Successfully');
      getAllUsers();
      setLoaded(true);
    } catch (err) {
      setLoaded(true);
      SplashMessage('Error in Deleting');
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
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../res/images/download1.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  marginRight: 10,
                  // backgroundColor: 'pink',
                  // marginBottom: 10,
                }}
              />
            </TouchableOpacity>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('AddUpdateUser', {isUpdate: false})}
        style={{
          width: 120,
          height: 60,
          borderRadius: 40,
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: '#32264d',
          zIndex: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>ADD User </Text>
        <Image
          source={require('../res/images/add.png')}
          style={{
            zIndex: 4,
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
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
