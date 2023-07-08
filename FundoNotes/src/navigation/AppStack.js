import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../utilities/StylingConstants';
import CustomDrawer from '../components/CustomDrawer';
import CreateNote from '../screens/CreateNote';
const Stack = createNativeStackNavigator();
import AppDrawer from './AppDrawer';
import Search from '../screens/Search';
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
      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
