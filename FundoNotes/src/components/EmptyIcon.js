import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utilities/StylingConstants';

const EmptyIcon = ({name}) => {
  return (
    <View>
      <Feather name="clipboard" size={100} color={theme.colors.foreground} />
    </View>
  );
};
export default EmptyIcon;
