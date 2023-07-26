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

export const addNote = async (noteId, noteData, uid, callback) => {
  try {
    await DB.transaction(async txn => {
      noteData.Pinned = noteData.Pinned ? 1 : 0;
      noteData.Archive = noteData.Archive ? 1 : 0;
      noteData.Trash = noteData.Trash ? 1 : 0;
      noteData.IsList = noteData.IsList ? 1 : 0;
      await txn.executeSql(
        'INSERT INTO FundooNotes (ID,noteId,Title ,Note ,Archive ,Pinned ,Remainder,Trash,BackgroundColor,IsList,List) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [
          uid,
          noteId,
          noteData.Title,
          noteData.Note,
          noteData.Archive,
          noteData.Pinned,
          noteData.Remainder,
          noteData.Trash,
          noteData.BackgroundColor,
          noteData.IsList,
          JSON.stringify(noteData.List),
        ],
        () => {
          console.log('Inserted');
        },
        error => {
          console.log('Sqlite', error);
        },
      );
    });
    callback();
  } catch (error) {
    console.log(error.code);
  }
};