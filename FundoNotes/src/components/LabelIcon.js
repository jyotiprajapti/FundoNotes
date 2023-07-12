import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../utilities/StylingConstants';
const LabelIcon = () => {
  return (
    <View>
      
    <MaterialCommunityIcons
      name='label-outline'
      size={100}
      color={theme.colors.foreground}
      style={styles.icon}
    />
  </View>
  )
}

export default LabelIcon

const styles = StyleSheet.create({})


