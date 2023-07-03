import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Notes from '../screens/Notes';
import Reminder from '../screens/Reminder';
import theme from '../utilities/StylingConstants';
import CreateNewLabel from '../screens/CreateNewLabel';
import Archive from '../screens/Archive';
import Deleted from '../screens/Deleted';
import Settings from '../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={Notes}
      />
      <Drawer.Screen
        name="Reminder"
        component={Reminder}
      />
      <Drawer.Screen
        name="Create new label"
        component={CreateNewLabel}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
      />
      <Drawer.Screen
        name="Deleted"
        component={Deleted}
        
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
    
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
