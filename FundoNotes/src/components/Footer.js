import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
const Footer = (props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Feather
          name="check-square"
          size={theme.icon.smallIcon}
          color="black"
        />
        <Feather name="edit-3" size={theme.icon.smallIcon} color="black" />

        <Feather name="mic" size={theme.icon.smallIcon} color="black" />
        <Feather name="image" size={theme.icon.smallIcon} color="black" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('CreateNote',{
          data:props.notesData
        })}>
        <Feather
          name="plus-square"
          size={theme.icon.mediumIcon}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.foreground,
    height: theme.height.bottomBar,
    paddingHorizontal: 10,
  },
  button: {
    borderColor: 'white',
    height: 60,
    width: 60,
    borderWidth: 5,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: theme.colors.foreground,
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    gap: 10,
  },
});
