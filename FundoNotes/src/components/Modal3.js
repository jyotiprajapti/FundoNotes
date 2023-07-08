import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../utilities/StylingConstants';
import { useNavigation } from '@react-navigation/native';
const Modal3 = ({visible, onRequestClose,handleDelete}) => {

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
              onPress={handleDelete}>
              <AntDesign
                name="delete"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <AntDesign
                name="copy1"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Make a copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <AntDesign
                name="sharealt"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Ionicons
                name="people-outline"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Collaborator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Feather
                name="plus"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Labels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <AntDesign
                name="questioncircleo"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Help & Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  touchable: {
    flexDirection: 'row',
    marginVertical: theme.spacing.m,
  },
});

export default Modal3;
