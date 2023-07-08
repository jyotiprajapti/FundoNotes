import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../utilities/StylingConstants';
const Modal4 = ({
  visible,
  onRequestClose,
  handleRestore,
  handleDeleteForever,
}) => {
  return (
    <View style={styles.centerdView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centerdView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.touchable} onPress={handleRestore}>
              <MaterialCommunityIcons
                name="restore"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Restore</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={handleDeleteForever}>
              <MaterialCommunityIcons
                name="delete-forever-outline"
                size={theme.icon.smallIcon}
                color={theme.colors.text1}
              />
              <Text style={styles.text}>Delete forever</Text>
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

export default Modal4;
