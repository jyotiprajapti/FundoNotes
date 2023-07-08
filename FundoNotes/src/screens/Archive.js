import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import {fetchNote} from '../services/NoteServices';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AutenticationProvider';
const Archive = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const getNotes = async () => {
    const notesData = await fetchNote(user.uid);
    setNotes(notesData);
    console.log(notes);
  };
  const handleEditNote = () => {
    navigation.navigate('CreateNote');
  };
  useEffect(() => {
    getNotes();
  }, []);
  const archiveNotes = notes.filter(note => note.ArchiveData);
  const otherNotes = notes.filter(note => !note.ArchiveData);
  return (
    <View>
      <TopBar
        navigation={navigation}
        searchPhrase="Search your note here"
        toggle={toggle}
        handleToggle={handleToggle}
      />
      <FlatList
      
        data={archiveNotes}
       
        numColumns={ toggle ? 2:1 }
        key={toggle ? 2:1 }
        renderItem={({item: note}) => (
          <TouchableOpacity onPress={handleEditNote}  style={toggle && styles.rowContainer} >
            <NoteCard {...note} toggle = {toggle}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles =StyleSheet.create({
  rowContainer:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default Archive;
