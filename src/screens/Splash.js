import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import UserDashboard from './UserDashboard';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        Welcome to UsersCRUD
      </Text>
      <Image
        source={require('../res/images/users.png')}
        style={{width: 200, height: 300, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
