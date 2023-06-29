
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Notes from '../screens/Notes';
const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = "Dashboard" component={Notes}/>
    </Stack.Navigator>
  )
}

export default AppStack