import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import {fetchNote} from '../services/NoteServices';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AutenticationProvider';
const Delete = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getNotes = async () => {
    const notesData = await fetchNote(user.uid);
    const deleteNotes = notesData.filter(note => note.DeleteData);
    setNotes(deleteNotes);
  };
  const handleEditNote = item => {
    navigation.navigate('CreateNote', {
      isDeleted: true,
      editData: item,
      noteId: item.id,
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  console.log('notes datajhdgs', notes);
  return (
    <View>
      <TopBar
        navigation={navigation}
        searchPhrase="Search your note here"
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <FlatList
        data={notes}
        numColumns={toggle ? 2 : 1}
        key={toggle ? 2 : 1}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleEditNote(item)}
            style={toggle && styles.rowContainer}>
            <NoteCard {...item} toggle={toggle} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Delete;
