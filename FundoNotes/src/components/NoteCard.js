import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
const NoteCard = props => {
  console.log(props);
  return (
    <View style={props.toggle ? styles.gridItem : styles.container}>
     
        <Text style={styles.title}>{props.Title}</Text>
        <Text style={styles.note}>{props.Note}</Text>
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
backgroundColor: theme.colors.box1,
margin: theme.spacing.s,
borderRadius: theme.spacing.xs,
width: theme.width.width3,
height: theme.height.secondary3
}
});
