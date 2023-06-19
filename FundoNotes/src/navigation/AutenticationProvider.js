import { StyleSheet, Text, View } from 'react-native'
import React,{createContext} from 'react'
export const AuthContext = createContext(); 

const AutenticationProvider = () => {
  return (
    <View>
      <Text>AutenticationProvider</Text>
    </View>
  )
}

export default AutenticationProvider

const styles = StyleSheet.create({})