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
  const [notes, setNotes] = useState([
    // {id: 1, desc: 'fjaskdljkasjkfdjkasjdfhasjkdfhjkashdfjashddsh'},
  ]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('notesArray');
        console.log(
          '\n\n Arraay Available on All Notes Page\n\n',
          JSON.parse(jsonValue),
        );
        let newArr = JSON.parse(jsonValue);
        setNotes([...notes, ...newArr]);
      } catch (e) {
        console.log('\n\n Error in Retriving Notes from Async Storage\n\n', e);
        return e;
        // error reading value
      }
    };

    getNotes();
    // console.log('\n\n Obtained Notes\n\n', arr);
    // setNotes(arr);
  }, []);
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{width: '95%', height: '90%'}}>
        <ScrollView
          contentContainerStyle={{
            //   height: '80%',
            //   width: '95%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'pink',
          }}>
          {notes.length ? (
            notes.map(t => {
              return (
                <View
                  key={t.id}
                  style={{
                    width: '100%',
                    height: 100,
                    //   backgroundColor: 'yellow',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: -10,
                    }}>
                    <Image
                      source={require('../res/images/delete.jpg')}
                      style={{
                        alignSelf: 'flex-end',
                        width: 20,
                        height: 30,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      backgroundColor: '#d446d1',
                      height: '80%',
                      // borderWidth: 1,
                      marginTop: -5,
                    }}>
                    {t.desc}
                  </Text>
                </View>
              );
            })
          ) : (
            <>
              <View
                style={{
                  flex: 1,
                  height: 600,
                  justifyContent: 'center',
                  alignItems: 'center',
                  //   backgroundColor: 'yellow',
                }}>
                <Text style={{textAlign: 'center'}}>
                  No Notes To Show. Please Add one by visiting the Create Note
                  Page
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'yellow',
          width: '95%',
          height: '10%',
          justifyContent: 'flex-end',
          alignItems: 'center',
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

export default AllNotes;
