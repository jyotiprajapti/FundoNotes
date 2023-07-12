import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import NoteCard from '../components/NoteCard';
import {fetchNote} from '../services/NoteServices';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AutenticationProvider';
import {useSelector} from 'react-redux';
const Default = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const {user} = useContext(AuthContext);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [activity, setActivity] = useState(true);
  const toggle = useSelector(state => state.reducer.toggle);
  const getNotes = async () => {
    const notesData = await fetchNote(user.uid);
    setNotes(notesData);
    const archive = notesData.filter(note => note.ArchiveData);
    const deleteNotes = notesData.filter(note => note.DeleteData);
    setDeletedNotes(deleteNotes);
    setArchiveNotes(archive);
    setActivity(false);
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getNotes());

    return subscribe;
  }, []);

  const handleEditNote = item => {
    navigation.navigate('CreateNote', {
      editData: item,
      noteId: item.id,
    });
  };

  return (
    <ScrollView>
      <View style={styles.searchConatiner}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TextInput
          value={search}
          placeholderTextColor={'grey'}
          placeholder="Search within 'Default'"
          style={styles.text}
          onChangeText={text => setSearch(text)}
        />
      </View>
      {activity && <ActivityIndicator size={30} color={'pink'} />}
      <View>
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
      <View>
        <Text style = {{color: 'black', margin: 15}} >Archive</Text>
      <FlatList
          data={archiveNotes}
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
      <View>
        <Text style = {{color: 'black',margin:15}} >Deleted</Text>
      <FlatList
          data={deletedNotes}
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
    </ScrollView>
  );
};

export default Default;

const styles = StyleSheet.create({
  searchConatiner: {
    backgroundColor: theme.colors.box1,
    height: theme.spacing.xxl,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: theme.spacing.m,
    marginLeft: theme.spacing.m,
  },
  arrow: {
    marginTop: theme.spacing.l,
    marginLeft: theme.spacing.l,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '45%',
  },
});
