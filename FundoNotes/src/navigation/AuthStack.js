import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {AutenticationProvider} from './AutenticationProvider';
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
      "84083558163-ev2hobpcnlvvup4no81b1jdjmeplrig5.apps.googleusercontent.com",
        offlineAccess : true,
    });
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
