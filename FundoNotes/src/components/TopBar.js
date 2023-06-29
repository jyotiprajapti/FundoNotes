import {View, StyleSheet, TextInput, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import theme from '../utilities/StylingConstants';
const TopBar = ({searchPhrase, setSearchPhrase, grid, placeHolder}) => {
  return (
    <View style={styles.container}>
      <Feather
        name="menu"
        size={theme.icon.smallIcon}
        color="black"
        style={{marginLeft: 1}}
      />

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
          style={{marginLeft: 1}}
        />
      ) : (
        <Feather
          name="list"
          size={theme.icon.smallIcon}
          color="black"
          style={{marginLeft: 1}}
        />
      )}
      <Image
        source={require('../utilities/images/ProfilePic.jpeg')}
        style={styles.image}
      />
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.m,
    alignItems: 'center',
    flexDirection: 'row',
    width: theme.width,
    backgroundColor: theme.colors.foreground,
    borderRadius: theme.spacing.s,
    padding: theme.spacing.s,
  },

  input: {
    fontSize: theme.textVariants.body.fontSize,
    marginLeft: theme.spacing.m,
    width: theme.width,
    color: theme.colors.placeHolder,
  },

  image: {
    width: theme.spacing.l,
    height: theme.spacing.l,
    borderRadius: 100,
    marginLeft: theme.spacing.s,
  },
});
