import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utilities/StylingConstants';

const ReminderIcon = ({name})=>{
  return(
    <View> <Feather name = {name}  size = {100} color = {theme.colors.foreground} /> </View>
  )
}
export default ReminderIcon