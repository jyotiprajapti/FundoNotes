import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
const MyButton = ({btnLabel, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.height.radius,
    alignItems: 'center',
    width: theme.width.widthButton,
    paddingVertical: theme.spacing.xs,
    margin: theme.spacing.s,
  },
  text: {
    color: theme.colors.text2,
    fontSize: theme.textVariants.body.fontSizeBig,
    fontWeight: 'bold',
  },
});
