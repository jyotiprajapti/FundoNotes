import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';

const MyInput = props => {
  const {placeHolder, value, onChangeText, secureTextEntry} = props;
  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor={theme.colors.placeHolder}
      value={value}
      onChangeText={onChangeText}
      style={styles.container}
      secureTextEntry = {secureTextEntry}

    />
  );
};

export default MyInput;
const styles = StyleSheet.create({
  container: {
    borderRadius: theme.height.radius,
    color: theme.colors.text1,
    width: theme.width.width,
    paddingHorizontal:theme.spacing.l,
    backgroundColor: theme.colors.text2,
    marginVertical: theme.spacing.s,
    height: theme.height.primary,
    borderWidth: 0.8,
    borderColor: theme.colors.text2,
  },
});
