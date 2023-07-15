import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../utilities/StylingConstants';
import Modal6 from './Modal6';
const Modal5 = ({visible, onRequestClose}) => {
    const [modalVisible,setModalVisible] = useState(false)
    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
      };


  return (
    <View style={styles.centerdView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centerdView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.touchable}
              >
              <AntDesign
                name="clockcircleo"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Tomorrow morning</Text>
              <Text style={styles.text}>8:00am</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              >
              <AntDesign
                name="clockcircleo"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Wednesday morning</Text>
              <Text style={styles.text2}>wed 8:00am</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={handleModalVisible}
              >
              <AntDesign
                name="clockcircleo"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Choose date & time</Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal6 onRequestClose={handleModalVisible} visible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  centerdView: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    backgroundColor: 'white',
    paddingRight: theme.spacing.xxl,
    paddingLeft: theme.spacing.l,
    shadowColor: theme.colors.text1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: theme.spacing.l,
  },
  text: {
    color: theme.colors.text1,
    fontSize: theme.spacing.m,
    paddingLeft: theme.spacing.s,
    marginRight: theme.spacing.xl
  },
  text2:{
    color: theme.colors.text1,
    fontSize: theme.spacing.m,
    paddingLeft: theme.spacing.s,
   
  },
  touchable: {
    flexDirection: 'row',
    marginVertical: theme.spacing.m,
  },
});

export default Modal5;
