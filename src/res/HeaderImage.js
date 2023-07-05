import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HeaderImage = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('AllNotes')}>
        <Image
          source={require('../res/images/take_note.png')}
          style={{
            width: 40,
            height: 40,
            //   borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImage;
