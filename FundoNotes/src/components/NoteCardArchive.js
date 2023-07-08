import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
const NoteCardArchive = ({navigation, title, note, label, notes}) => {
  const pinnedNotes = notes.filter(note => note.pinned);
  const otherNotes = notes.filter(note => !note.pinned);

  return (
    <View>
      
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.foreground,
    borderWidth: 1,
    width: '92%',
    alignSelf: 'center',
    borderRadius: theme.spacing.s,
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: theme.spacing.l,
  },
  note: {
    color: theme.colors.placeHolder,
  },
  label: {
    color: theme.colors.placeHolder,
  },
});
export default NoteCardArchive;
