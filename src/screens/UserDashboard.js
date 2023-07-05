import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
// import {useState} from 'react';

const UserDashboard = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
  );
};

export default UserDashboard;
