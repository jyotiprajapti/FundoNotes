import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
const Modal2 = ({ visible, onClose }) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Feather name="edit-3" size={theme.icon.smallIcon} color="black" />
            <Text style={styles.modalText}>Add Image</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>

              <Text style={styles.textStyle}>Choose image</Text>
            </Pressable>
            <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={onClose}>
        <Text style={styles.textStyle}>Hide</Text>
      </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal2;