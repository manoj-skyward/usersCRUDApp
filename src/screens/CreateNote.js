import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllNotes = ({navigation}) => {
  const [note, setNote] = useState('');

  const saveNoteToAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('notesArray');
      console.log(
        '\n\n Arraay Available on All Notes Page\n\n',
        JSON.parse(jsonValue),
      );
      let newArr = JSON.parse(jsonValue);
      let newNote = {
        id: new Date().getUTCMilliseconds(),
        desc: note,
      };
      let newNotesArray = [...newArr, {...newNote}];
      const newJsonValue = JSON.stringify(newNotesArray);
      await AsyncStorage.setItem('notesArray', newJsonValue);
      console.log('\n\n Date Saved to Async Storage Successfully\n\n');
      setNote('');
      navigation.navigate('AllNotes');
      //   console.log('\n\n New Update Array is\n\n', newNotesArray);
    } catch (e) {
      console.log('\n\n Error in Retriving Notes from Async Storage\n\n', e);
      return e;
      // error reading value
    }
  };

  //   useEffect(() => {
  //     const getNotes = async () => {
  //       try {
  //         const jsonValue = await AsyncStorage.getItem('notesArray');
  //         console.log(
  //           '\n\n Arraay Available on All Notes Page\n\n',
  //           JSON.parse(jsonValue),
  //         );
  //         let newArr = JSON.parse(jsonValue);
  //         setNotes([...notes, ...newArr]);
  //       } catch (e) {
  //         console.log('\n\n Error in Retriving Notes from Async Storage\n\n', e);
  //         return e;
  //         // error reading value
  //       }
  //     };

  //     getNotes();
  //     // console.log('\n\n Obtained Notes\n\n', arr);
  //     // setNotes(arr);
  //   }, []);
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{width: '95%', height: '90%'}}>
        <View
          style={{
            width: '100%',
            height: 200,
            //   backgroundColor: 'yellow',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: -10,
            }}>
            <TouchableOpacity onPress={() => setNote('')}>
              <Image
                source={require('../res/images/delete.jpg')}
                style={{
                  alignSelf: 'flex-end',
                  width: 20,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            onChangeText={text => setNote(text)}
            keyboardType="default"
            multiline={true}
            value={note}
            // keyboardType="numeric"
            placeholder="Enter Note"
            style={{
              backgroundColor: '#d446d1',
              //   height: 300,
              // borderWidth: 1,
              marginTop: -5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#d446d1',
          width: '80%',
          height: '7%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 10,
          borderRadius: 30,
        }}>
        <TouchableOpacity style={{}} onPress={() => saveNoteToAsyncStorage()}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '80%',
                justifyContent: 'center',
                // backgroundColor: 'black',
                // alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                Add Note
              </Text>
            </View>
            <View>
              <Image
                source={require('../res/images/right_arrow.jpg')}
                style={{
                  width: '20%',
                  alignSelf: 'flex-end',
                  width: 30,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllNotes;
