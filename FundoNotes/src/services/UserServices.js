import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const usersCollection = firestore().collection('Users');
export const addUser = (email, fullName, phoneNumber, password, uid) => {
  usersCollection.doc(uid).set({fullName, email, password, phoneNumber});
};

export const fetchUser = async (uid)=>{
 
return await usersCollection.doc(uid).get().then(item=>{
  const data = item.data()
  return data;
});
}

export const update = async (uid)=>{

  photoURL = 'https://my-cdn.com/assets/user/123.png',
  await firebase.auth().currentUser.updateProfile(update);
};



