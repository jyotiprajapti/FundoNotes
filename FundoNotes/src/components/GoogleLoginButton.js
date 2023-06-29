import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
const GoogleLoginButton = ({onPress,btnLabel}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name="at-sign" size={theme.icon.smallIcon} color="black" />
      <Text style={styles.text}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.width.widthButton,
    paddingVertical: theme.spacing.xs,
    margin: theme.spacing.s,
  },
  text: {
    color: theme.colors.text1,
    fontSize: theme.textVariants.body.fontSize,
  },
});
export default GoogleLoginButton;
