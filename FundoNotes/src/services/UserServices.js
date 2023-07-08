import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users');
export const addUser = (email, fullName, phoneNumber, password, uid) => {
  usersCollection.doc(uid).set({fullName, email, password, phoneNumber});
};

export const fetchUser = async (uid)=>{
 
return await usersCollection.doc(uid).get().then(item=>{
  const data = item.data()
  console.log(data)
  return data;
});
}

export const updateUser = async (uid,profilePic)=>{
 await usersCollection.doc(uid).update({profilePic})
}


