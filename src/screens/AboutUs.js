import {View, Text} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f2537',
      }}>
      <Text
        style={{
          textAlign: 'center',
          width: '90%',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        GraphQL and REST API for Testing and Prototyping fake data | real
        responses | 24/7 online
      </Text>
    </View>
  );
};

export default AboutUs;
