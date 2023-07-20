import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNote, updateNote, deleteNote} from '../services/NoteServices';
import {AuthContext} from '../navigation/AutenticationProvider';
import {useDispatch, useSelector} from 'react-redux';
import Modal3 from '../components/Modal3';
import Modal4 from '../components/Modal4';
import {Chip} from 'react-native-paper';
import Modal5 from '../components/Modal5';
const CreateNote = ({navigation, route}) => {
  const notesData = route.params?.editData;
  const isDeleted = route.params?.isDeleted;
  const noteId = route.params?.noteId;
  const labelData = route.params?.labelData || notesData?.labelData;
  const [noteTitle, setNoteTitle] = useState(notesData?.Title || '');
  const [noteContent, setNoteContent] = useState(notesData?.Note || '');
  const [pinData, setPinData] = useState(notesData?.Pindata || false);
  const [archiveData, setArchiveData] = useState(
    notesData?.ArchiveData || false,
  );
  const [deleteData, setDeleteData] = useState(notesData?.DeleteData || false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [show, setShow] = useState(true);
  const {user} = useContext(AuthContext);
const dispatch = useDispatch()
  const handlePinClick = () => {
    setPinData(!pinData);
  };

  const handleArchiveClick = () => {
    setArchiveData(!archiveData);
  };
  const dataLabel = useSelector(state => state.reducer.labelData);
  const date = useSelector(state => state.reducer.dateTime);
console.log("date",date)
  const handleBackButton = () => {
    if (noteTitle || noteContent) {
      if (noteId) {
        updateNote(
          user.uid,
          noteTitle,
          noteContent,
          pinData,
          archiveData,
          deleteData,
          noteId,
          labelData,
          date
        );
      } else {
        createNote(
          user.uid,
          noteTitle,
          noteContent,
          pinData,
          archiveData,
          deleteData,
          labelData,
          date
        );
      }
    }
setModalVisible2(false)
    navigation.goBack();
  };
  const handleDelete = () => {
    const data = !deleteData;
    setDeleteData(data);
    setShow(true);
    handleModalVisible();
  };

  const handleDeleteForever = () => {
    deleteNote(user.uid, noteId);

    navigation.navigate('Home');
  };

  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handleModalVisible2 = () => {
    setModalVisible2(!modalVisible2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={handleBackButton}>
          <Feather name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        {!isDeleted && (
          <View style={styles.container2}>
            <TouchableOpacity onPress={handlePinClick}>
              <MaterialIcons
                name="push-pin"
                size={theme.spacing.l}
                color={pinData ? theme.colors.background : 'black'}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleModalVisible2}>
              <Feather name="bell" size={theme.spacing.l} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleArchiveClick}>
              <Feather
                name="archive"
                size={theme.spacing.l}
                color={archiveData ? theme.colors.background : 'black'}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View></View>

      <View style={styles.content}>
        <View>
          <TextInput
            style={styles.titleInput}
            placeholderTextColor={theme.colors.foreground}
            placeholder="Title"
            value={noteTitle}
            onChangeText={text => setNoteTitle(text)}
          />
          <TextInput
            style={styles.contentInput}
            placeholderTextColor={theme.colors.foreground}
            multiline
            placeholder="Note"
            value={noteContent}
            onChangeText={text => setNoteContent(text)}
          />

          <FlatList
            data={labelData}
            horizontal={true}
            renderItem={({item}) => (
              <Chip selected={true} style={styles.chip}>
                {item.labelName}
              </Chip> 
            )}
          />
          
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.view}>
          <Feather
            name="plus"
            size={theme.spacing.l}
            color={isDeleted ? 'black' : 'grey'}
          />
          <Ionicons
            name="color-palette"
            size={theme.spacing.l}
            color={isDeleted ? 'black' : 'grey'}
          />
        </View>

        <TouchableOpacity
          style={styles.container2}
          onPress={() => setModalVisible(true)}>
          <Entypo
            name="dots-three-vertical"
            size={theme.spacing.l}
            color="black"
          />
        </TouchableOpacity>

        {modalVisible &&
          (!isDeleted ? (
            <Modal3
              onRequestClose={handleModalVisible}
              visible={modalVisible}
              handleDelete={handleDelete}
              navigation={navigation}
            />
          ) : (
            <Modal4
              onRequestClose={handleModalVisible}
              visible={modalVisible}
              handleRestore={handleDelete}
              handleDeleteForever={handleDeleteForever}
            />
          ))}
        <Modal5 onRequestClose={handleModalVisible2} visible={modalVisible2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.l,
    backgroundColor: theme.colors.text2,
    flex: 1,
  },
  titleInput: {
    fontSize: theme.spacing.xl,
    marginBottom: theme.spacing.l,
    color: theme.colors.background,
    borderColor: theme.colors.box1,
    borderWidth: 0.2,
  },
  contentInput: {
    fontSize: theme.spacing.l,
    padding: theme.spacing.s,
    color: theme.colors.background,
    borderColor: theme.colors.box1,
    borderWidth: 0.2,
  },
  top: {
    flexDirection: 'row',
    paddingTop: theme.spacing.l,
  },
  bottom: {
    flexDirection: 'row',
    padding: theme.spacing.l,
  },
  container2: {
    flexDirection: 'row',
    marginLeft: 180,
    gap: theme.spacing.l,
  },
  view: {
    gap: theme.spacing.l,
    flexDirection: 'row',
  },
  content: {
    flex: 3,
  },
  chip: {
    width: 90,
    margin: 5,
  },
});

export default CreateNote;
