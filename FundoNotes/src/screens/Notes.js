import {View, StyleSheet, ScrollView, Button, Text} from 'react-native';

import React, {useContext, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../navigation/AutenticationProvider';
import {fetchUser} from '../services/UserServices';

import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import EmptyIcon from '../components/EmptyIcon';
import {theme} from '../utilities/StylingConstants';
const Notes = () => {
  const notes = [];

  const {logout, user} = useContext(AuthContext);
  const getUser = async () => {
    const userDetails = await fetchUser(user.uid);
    console.log(userDetails);
  };
  console.log('user is notes', user);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <TopBar placeHolder = 'Search your notes here' />
      </View>
      <View style={styles.content}>
        <ScrollView>{notes.length === 0 ? <EmptyIcon /> : null}</ScrollView>
        <Button title = 'Logout' onPress={()=>logout()}  />
      </View>
      <View style={styles.footer}><Footer /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-start',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 3,
  },
});
export default Notes;

// import { View, Text,Button } from 'react-native'
// import React, {useContext, useEffect} from 'react'
// import Feather from 'react-native-vector-icons/Feather'

// import { AuthContext } from '../navigation/AutenticationProvider'
// import { fetchUser } from '../services/UserServices'

// const Notes = () => {
//   const {logout,user} = useContext(AuthContext)
//   const getUser = async ()=>{
// const userDetails = await fetchUser(user.uid)
// console.log(userDetails)
//   }
//   console.log("user is notes", user)
//   useEffect(()=>{
//    getUser();
//   },[])
//   return (
//     <View>
//       <Text>Notes</Text>
//       <Button title = 'Logout' onPress={()=>logout()}  />
//       <Feather name = 'user' size = {50} color = 'black' />
//     </View>
//   )
// }

// export default Notes
