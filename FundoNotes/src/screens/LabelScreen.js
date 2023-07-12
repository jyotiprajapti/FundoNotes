import {View, StyleSheet, ScrollView} from 'react-native';
import LabelFooter from '../components/LabelFooter';
import LabelTopBar from '../components/LabelTopBar';
import LabelIcon from '../components/LabelIcon';
const LabelScreen = navigation => {
  const notes = [];
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <LabelTopBar navigation={navigation} searchPhrase="Search your note here" />
      </View>
      <View style={styles.content}>
        <ScrollView>{notes.length === 0 && <LabelIcon />}</ScrollView>
      </View>
      <View style={styles.footer}>
        <LabelFooter navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-start',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 3,
  },
});
export default LabelScreen;
