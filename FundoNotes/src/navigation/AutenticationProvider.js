import {StyleSheet} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {FirebaseValidation} from '../validations/FirebaseValidation';
import {CustomExeceptions} from '../exceptions/CustomExceptions';
import {firebaseException} from '../exceptions/ExceptionConstants';
import {addUser} from '../services/UserServices';

export const AuthContext = createContext();
export const AutenticationProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [exception, setException] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, errorCallback) => {
          try {
            const userDetails = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            setUser(userDetails.user.uid);
          } catch (e) {
            const temp = FirebaseValidation(e.code);
            errorCallback(temp);
          }
        },
        register: async (email, password, fullName, phoneNumber) => {
          try {
            const userDetails = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            setUser(userDetails.user.uid);
            addUser(
              email,
              fullName,
              phoneNumber,
              password,
              userDetails.user.uid,
            );
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            auth().signOut();
            setUser('');
          } catch (e) {
            console.log(e);
          }
        },
        googleSignIn: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
              
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});
