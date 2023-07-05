// In App.js in a new project
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import NotesDashboard from './screens/NotesDashboard';
import AllNotes from './screens/AllNotes';
import CreateNote from './screens/CreateNote';
import {PaperProvider} from 'react-native-paper';
import HeaderImage from './res/HeaderImage';
import UserImage from './res/UserImage';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotesDashboard"
          component={NotesDashboard}
          options={{
            // title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerLeft: () => <HeaderImage />,
            headerRight: () => <UserImage dashboard={true} />,
          }}
        />
        <Stack.Screen
          name="AllNotes"
          component={AllNotes}
          options={{
            // title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => <UserImage />,
            // headerLeft: () => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="CreateNote"
          component={CreateNote}
          options={{
            // title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerLeft: () => <HeaderImage />,
            headerRight: () => <UserImage />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
