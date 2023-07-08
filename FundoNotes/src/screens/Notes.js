import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../navigation/AutenticationProvider';
import {fetchUser} from '../services/UserServices';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import EmptyIcon from '../components/EmptyIcon';
import {fetchNote} from '../services/NoteServices';
import NoteCard from '../components/NoteCard';
import {FlatList} from 'react-native-gesture-handler';
const Notes = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [notes, setNotes] = useState([]);
  const [pinNotes, setPinNotes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getNotes = async () => {
    const notesData = await fetchNote(user.uid);
    const pin = notesData.filter(
      note => note.Pindata && !note.ArchiveData && !note.DeleteData,
    );
    setPinNotes(pin);
    const other = notesData.filter(
      note => !note.Pindata && !note.ArchiveData && !note.DeleteData,
    );
    setNotes(other);
    setShow(false);
  };

  const handleEditNote = item => {
    setShow(true);
    navigation.navigate('CreateNote', {
      editData: item,
      noteId: item.id,
    });
  };

  const getUser = async () => {
    const userDetails = await fetchUser(user.uid);
    console.log(userDetails);
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getNotes());
    getUser();

    return subscribe;
  }, []);
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <TopBar
          searchPhrase="Search your note here"
          navigation={navigation}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </View>
      <View style={styles.content}>
        {!notes ? (
          <EmptyIcon />
        ) : (
          <ScrollView nestedScrollEnabled={true}>
            <View>
              <ActivityIndicator
                size={'large'}
                animating={show}
                color={'pink'}
              />
              {pinNotes && <Text style={styles.heading}>Pinned</Text>}
              <FlatList
                data={pinNotes}
                numColumns={ toggle ? 2:1 }
                key={toggle ? 2:1 }
               // keyExtractor={({id}) => id}
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
              <ActivityIndicator
                size={'large'}
                animating={show}
                color={'pink'}
              />
              {pinNotes && <Text style={styles.heading}>Other</Text>}

              <FlatList
               
                data={notes}
                numColumns={ toggle ? 2:1 }
                key={toggle ? 2:1 }
                //keyExtractor={({id}) => id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleEditNote(item)}
                    style={toggle && styles.rowContainer}
                    >
                    <NoteCard {...item} toggle={toggle} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
        )}
      </View>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
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
    flex: 1,
  },
  text: {
    color: 'red',
  },
  note: {
    color: theme.colors.background,
    fontSize: theme.spacing.l,
    margin: theme.spacing.xs,
    fontWeight: 'bold',
  },
  title: {
    color: theme.colors.foreground,
    fontSize: theme.spacing.m,
    margin: theme.spacing.xs,
  },
  heading: {
    color: theme.colors.placeHolder,
    margin: theme.spacing.m,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width : "45%"
  },
});
export default Notes;
