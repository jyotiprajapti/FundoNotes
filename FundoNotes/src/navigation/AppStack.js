import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Notes from '../screens/Notes';
import Reminder from '../screens/Reminder';
import theme from '../utilities/StylingConstants';
import CreateNewLabel from '../screens/CreateNewLabel';
import Archive from '../screens/Archive';
import Deleted from '../screens/Deleted';
import Settings from '../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
const Stack = createNativeStackNavigator();
import AppDrawer from './AppDrawer';
const AppStack = () => {
  return (
    <Stack.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme.colors.foreground,
        drawerActiveTintColor: theme.colors.background,
        drawerInactiveTintColor: theme.colors.foreground,
        drawerLabelStyle: {marginLeft: -25},
      }}>
      <Stack.Screen
        name="Drawer"
        component={AppDrawer}
        options={{header: () => null}}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
