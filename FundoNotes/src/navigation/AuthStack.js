import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {AutenticationProvider} from './AutenticationProvider';
import {GoogleSignin} from '@react-native-community/google-signin'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '84083558163-2esdi3seifn6c9ls1pb2uclbg6kj8tuc.apps.googleusercontent.com',
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
