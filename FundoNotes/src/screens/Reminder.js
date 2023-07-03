import {
    View,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import Footer from '../components/Footer';
  import TopBar from '../components/TopBar';
  import ReminderIcon from '../components/ReminderIcon';
  const Reminder = (navigation) => {
    const notes = [];
    return (
      <View style={styles.constainer}>
        <View style={styles.header}>
          <TopBar navigation={navigation} />
        </View>
        <View style={styles.content}>
          <ScrollView>
            {notes.length === 0 ? <ReminderIcon name="bell" /> : null}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          
          <Footer />
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