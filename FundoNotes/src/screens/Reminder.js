import {
    View,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import Footer from '../components/Footer';
  import { AuthContext } from '../navigation/AutenticationProvider';
  import TopBar from '../components/TopBar';
  import ReminderIcon from '../components/ReminderIcon';
import { useContext } from 'react';

  const Reminder = ({navigation}) => {
    const notes = [];
    const {user} = useContext(AuthContext);
    return (
      <View style={styles.constainer}>
        <View style={styles.header}>
          <TopBar navigation={navigation} searchPhrase = 'Search your note here' targetScreen= 'ReminderSearch' />
        </View>
        <View style={styles.content}>
          <ScrollView>
            {notes.length === 0 && <ReminderIcon name="bell" />}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          
          <Footer navigation = {navigation}  />
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
      flex: 3
  
    },
  });
  export default Reminder;