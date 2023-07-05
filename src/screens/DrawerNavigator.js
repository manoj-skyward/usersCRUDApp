import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Users from './Users';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerActiveBackgroundColor: '#262A2C',
          //   drawerInactiveBackgroundColor: '#fff',
          drawerItemStyle: {
            height: 50,
          },
          drawerContentContainerStyle: {
            backgroundColor: '#bab045',
            flex: 1,
          },
          //   drawerLabel: 'Updates',
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          drawerActiveBackgroundColor: '#262A2C',
          //   drawerInactiveBackgroundColor: '#fff',
          drawerItemStyle: {
            height: 50,
          },
          drawerContentContainerStyle: {
            backgroundColor: '#bab045',
            flex: 1,
          },
          headerStyle: {backgroundColor: '#EBEBEB'},
          //   drawerLabel: 'Updates',
        }}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{
          drawerActiveBackgroundColor: '#262A2C',
          //   drawerInactiveBackgroundColor: '#fff',
          drawerItemStyle: {
            height: 50,
          },
          drawerContentContainerStyle: {
            backgroundColor: '#bab045',
            flex: 1,
          },
          headerStyle: {backgroundColor: '#EBEBEB'},
          //   drawerLabel: 'Updates',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
