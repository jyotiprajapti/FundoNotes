import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users');
export const createLabel = (uid, labelName) => {
  usersCollection.doc(uid).collection('Label').add({
    labelName: labelName,
  });
};

export const fetchLabel = async uid => {
  const labelData = [];
  const querySnapshot = await usersCollection
    .doc(uid)
    .collection('Label')
    .get();

  querySnapshot.forEach(documentSnapshot => {
    const data = documentSnapshot.data();
    data.id = documentSnapshot.id;
    labelData.push(data);
  });
  return labelData;
};

export const updateLabel = (uid, labelId, labelName) => {
  usersCollection.doc(uid).collection('Label').doc(labelId).update({
    labelName: labelName,
  });
};

export const deleteLabel = (uid, labelId) => {
  usersCollection.doc(uid).collection('Label').doc(labelId).delete();
};
