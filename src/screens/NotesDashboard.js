import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {FAB} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useState} from 'react';

const NotesDashboard = ({navigation}) => {
  const notesArray = [];

  useEffect(() => {
    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(notesArray);
        await AsyncStorage.setItem('notesArray', jsonValue);
        console.log('\n\n Date Saved to Async Storage Successfully\n\n');
      } catch (e) {
        // saving error
        console.log('\n\n Error in Saving Date\n\n', e);
      }
    };
    storeData();
  }, []);

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Image
          source={require('../res/images/girl_note.png')}
          style={{width: 200, height: 300, resizeMode: 'contain'}}
        />

        <Text style={{textAlign: 'center', fontSize: 17}}>
          Don't have a note yet, want to create one, please tap the '+' icon
          below
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'yellow',
          width: '80%',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateNote')}>
          <Image
            source={require('../res/images/add.jpg')}
            style={{
              alignSelf: 'flex-end',
              width: 50,
              height: 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotesDashboard;
