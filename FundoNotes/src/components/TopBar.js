import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {DrawerToggleButton} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
import AppDrawer from '../navigation/AppDrawer';
import CustomDrawer from './CustomDrawer';
import Modal1 from './Modal1';
const TopBar = ({
  searchPhrase,
  setSearchPhrase,
  grid,
  placeHolder,
  navigation,
}) => {
  return (
    <View style={styles.outerConatiner}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={theme.icon.smallIcon} color="black" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {grid ? (
          <Feather
            name="grid"
            size={theme.icon.smallIcon}
            color="black"
            style={styles.icons}
          />
        ) : (
          <Feather
            name="list"
            size={theme.icon.smallIcon}
            color="black"
            style={styles.icons}
          />
        )}
        <Modal1/>
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  outerConatiner: {
    marginHorizontal: theme.spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: theme.spacing.m,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: theme.colors.foreground,
    borderRadius: theme.spacing.s,
    padding: 5,
  },
  icons: {
    alignSelf: 'center',
  },
  input: {
    fontSize: theme.textVariants.body.fontSize,
    marginLeft: theme.spacing.m,
    width: theme.width.widthButton,
    color: theme.colors.placeHolder,
  },

  image: {
    width: theme.spacing.l,
    height: theme.spacing.l,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
