import {StyleSheet, Text, View, TextInput,FlatList,TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../navigation/AutenticationProvider';
import {fetchNote} from '../services/NoteServices';
import theme from '../utilities/StylingConstants';
import NoteCard from '../components/NoteCard';

const Search = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const getNotes = async () => {
    const notesData = await fetchNote(user.uid);
    setNotes(notesData);
    console.log(notes);
  };
  const handleEditNote = () => {
    navigation.navigate('CreateNote');
  };
  const getSearchdata = word => {
    const searchedData = notes.filter(
      item =>
        item.Title?.toUpperCase()?.includes(word.toUpperCase()) ||
        item.Note?.toUpperCase()?.includes(word.toUpperCase()),
    );
    setSearchData(searchedData);
  };


  useEffect(() => {
    getNotes();
  }, []);
  return (
    <View>
        
      <Text style={styles.heading}>Search your notes here </Text>
      <TextInput
        placeholder="Enter a word to search"
        placeholderTextColor={theme.colors.foreground}
        style = {styles.input}
        onChangeText={(text)=>getSearchdata(text)}
      />
      
      
      <FlatList  style = {{color:'red'}}
            data={searchData}
            keyExtractor={({ id }) => id} 
            renderItem={({ item: note }) => (
              <TouchableOpacity onPress={handleEditNote}  >
                <NoteCard {...note} />
              </TouchableOpacity>
            )}
          />     
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {},
  heading: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: theme.spacing.l,
    margin: theme.spacing.l,
    textAlign: 'center',
    borderBottomColor: theme.colors.foreground,
    borderTopWidth: 2,
    borderTopColor: theme.colors.foreground,
    borderBottomWidth: 2,
    paddingVertical: theme.spacing.m
  },
  input: {
    color: theme.colors.foreground,
    fontSize: theme.spacing.l,
    margin: theme.spacing.m,
    borderRadius: theme.spacing.m,
    borderColor: theme.colors.background,
    borderWidth: 0.5,
    paddingLeft: 10
  },
});
