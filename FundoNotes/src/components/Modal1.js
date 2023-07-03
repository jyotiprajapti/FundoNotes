import React, {useState,useContext} from 'react';
import { AuthContext } from '../navigation/AutenticationProvider';
import { Modal, StyleSheet, Text, Pressable, View,Image} from 'react-native';
import theme from '../utilities/StylingConstants'
import Modal2 from './Modal2';
const Modal1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const {logout} = useContext(AuthContext);
  const openNewModal = () => {
    setShowNewModal(true);
  };

  const closeNewModal = () => {
    setShowNewModal(false);
  };
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
          source={require('../utilities/images/ProfilePic.jpeg')}
          style={styles.image2}
        />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Take photo</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>openNewModal}>
              <Text style={styles.textStyle}>Upload photo</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>logout()}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </View>
        </View>
              <Modal2 visible={showNewModal} onClose={closeNewModal}/>

      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Image
          source={require('../utilities/images/ProfilePic.jpeg')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: theme.spacing.xl,
    alignItems: 'center',
    shadowColor: theme.colors.text1,
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
    elevation: 2,
    padding: theme.spacing.s
  },
  buttonOpen: {
    backgroundColor: theme.colors.foreground,
  },
  buttonClose: {
    backgroundColor: theme.colors.foreground,
    marginBottom: theme.spacing.m
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  image: {
    width: theme.spacing.l,
    height: theme.spacing.l,
    borderRadius: 100,
    alignSelf: 'center',
  },
  image2: {
    width: theme.spacing.xxl,
    height: theme.spacing.xxl,
    borderRadius: 100,
    alignSelf: 'center',
    margin: theme.spacing.l
  },
});

export default Modal1;