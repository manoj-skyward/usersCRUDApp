import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('NotesDashboard');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#d446d1'}}>
        Welcome to the Best Note Taking App
      </Text>
      <Image
        source={require('../res/images/take_note.png')}
        style={{width: 200, height: 300, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
