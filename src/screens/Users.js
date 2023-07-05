import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../api/api';

const Users = () => {
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

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        let response = await api.get('users');
        console.log('\n\n Response is \n\n', response.data);
        setUsers(response.data);
      } catch (err) {
        console.log('\n\n Something Went Wrong\n\n', err);
      }
    };

    getAllUsers();
  }, []);

  const _renderUserCard = item => {
    return (
      <View
        id={item.id}
        style={{
          marginVertical: 5,
          width: '95%',
          height: 160,
          borderRadius: 10,
          backgroundColor: '#b6bccc',
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
            <Text style={{textAlign: 'left', fontSize: 17}}>{item.name} </Text>
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
            <Text style={{textAlign: 'left', fontSize: 17}}>{item.email} </Text>
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
            marginBottom: 20,
            // marginRight: 10,
            // backgroundColor: 'yellow',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../res/images/delete.png')}
              style={{
                resizeMode: 'contain',
                height: 25,
                width: 25,
                marginRight: 10,
                // marginBottom: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
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
      <FlatList
        // horizontal={true}
        data={users}
        renderItem={({item}) => _renderUserCard(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Users;
