import {View, Text} from 'react-native';
import React from 'react';

const ContactUs = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#0f2537',
      }}>
      <Text
        style={{
          textAlign: 'center',
          width: '90%',
          fontSize: 40,
          fontWeight: 'bold',
          color: '#139c49',
          marginVertical: 10,
        }}>
        Alitainfotech
      </Text>

      <Text
        style={{
          textAlign: 'center',
          width: '90%',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000',
        }}>
        Auditorium, 330-31, The Galleria N/R. Sanjeev Kumar Road, Pal Gam,
        Surat, Gujarat 395009 +91 932-823-2522 hr@alitainfotech.com
      </Text>
    </View>
  );
};

export default ContactUs;
