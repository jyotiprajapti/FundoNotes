import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
import { Chip } from 'react-native-paper';
const NoteCard = props => {
  return (
    <View style={props.toggle ? styles.gridItem : styles.container}>
     
        <Text style={styles.title}>{props.Title}</Text>
        <Text style={styles.note}>{props.Note}</Text>
        <FlatList data={props.labelData}
        style = {{flexDirection: 'row',flexWrap: 'wrap'}}
          renderItem={({item})=><Chip selected={true} style={styles.chip}>
          {item.labelName}
        </Chip>} />
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.background,
    borderWidth: 0.3,
    marginBottom: theme.spacing.s,
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.xs,
  },
  title: {
    color: theme.colors.background,
    fontSize: theme.spacing.l,
    margin: theme.spacing.xs,
    fontWeight: 'bold',
  },
  note: {
    color: theme.colors.foreground,
    fontSize: theme.spacing.m,
    margin: theme.spacing.m,
  },
gridItem:{
borderColor: theme.colors.background,
borderWidth: 0.5,
margin: theme.spacing.s,
borderRadius: theme.spacing.xs,
width: theme.width.width3,
height: theme.height.secondary3
},
chip: {
  width: 90,
  margin: 5,
},
});
