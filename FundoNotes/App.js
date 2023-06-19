import React from 'react';
import Login from './src/screens/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/auth/Register';

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name = 'Register' component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}
export default App;