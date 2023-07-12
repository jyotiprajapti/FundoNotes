import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../utilities/StylingConstants';

const LabelSelectCard = ({key, handleSelectOption,labelName,value}) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={handleSelectOption}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <MaterialCommunityIcons
        name="label-outline"
        size={28}
        color={theme.colors.text1}
      />
      <Text style={styles.text}>{labelName}</Text>
      <Checkbox.Android
        status={
          selectedOptions.includes(value) ? 'checked' : 'unchecked'
        }
        onPress={() => handleSelectOption(value)}
      />
    </TouchableOpacity>
  );
};

export default LabelSelectCard;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    width: 220,
    margin: theme.spacing.m,
    fontSize: theme.spacing.l,
  },
});
