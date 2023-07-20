import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users');
export const createNote = async (uid, title, note, pindata, archiveData,deleteData,labelData,reminderDate) => {
  usersCollection
    .doc(uid)
    .collection('Notes')
    .add({
      Title: title,
      Note: note,
      Pindata: pindata,
      ArchiveData: archiveData,
      DeleteData : deleteData,
      labelData: labelData,
      reminderDate: reminderDate,
    });
};

export const fetchNote = async uid => {
  const notesData = [];
  const querySnapshot = await usersCollection
    .doc(uid)
    .collection('Notes')
    .get();

  querySnapshot.forEach(documentSnapshot => {
    const data = documentSnapshot.data();
    data.id = documentSnapshot.id;
    notesData.push(data);
  });
  return notesData;
};

export const updateNote =  (uid, title, note, pindata, archiveData, deleteData, noteId, labelData,reminderDate) => {
 usersCollection
    .doc(uid)
    .collection('Notes')
    .doc(noteId)
    .update({
      Title: title,
      Note: note,
      Pindata: pindata,
      ArchiveData: archiveData,
      DeleteData: deleteData,
      labelData: labelData,
      reminderDate: reminderDate,
    });
};

export const deleteNote =  (uid, noteId)=>
{
  usersCollection
    .doc(uid)
    .collection('Notes')
    .doc(noteId).delete()
}