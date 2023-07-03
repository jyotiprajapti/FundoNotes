import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utilities/StylingConstants';

const EmptyIcon = ({name}) => {
  return (
    <View>
      <Feather name="clipboard" size={150} color={theme.colors.foreground}  style = {styles.icon}/>
    </View>
  );
};

const styles = StyleSheet.create({
icon:{
alignSelf:"center",
justifyContent:'center',
paddingTop:theme.width.widthButton
}
})
export default EmptyIcon;
