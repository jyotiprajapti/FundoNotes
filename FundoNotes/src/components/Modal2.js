import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
const Modal2 = ({visible, onRequestClose,pickImage,openCamera}) => {
  const [selectImage, setSelectImage] = useState('');

  return (
    <View style={{}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.view3}>
              <Text style={styles.modalText}>Add Image</Text>
            </View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={openCamera}>
              <Feather
                name="camera"
                size={theme.icon.smallIcon}
                color="black"
                style={styles.icons}
              />
              <Text style={styles.textStyle2}>Open camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={ pickImage}>
              <Feather
                name="camera"
                size={theme.icon.smallIcon}
                color="black"
                style={styles.icons}
              />
              <Text style={styles.textStyle2}>Choose image</Text>
            </TouchableOpacity>
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
    marginTop: theme.spacing.s,
  },
  modalView: {
    margin: theme.spacing.m,
    backgroundColor: 'white',
    borderRadius: theme.spacing.m,
    padding: theme.spacing.xl,
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
    borderRadius: theme.spacing.l,
    padding: theme.spacing.s,
    margin: theme.spacing.xs,
    flexDirection: 'row',
    borderColor: theme.colors.foreground,
    borderWidth: 0.8,
  },
  buttonOpen: {
    backgroundColor: theme.colors.foreground,
  },
  textStyle: {
    color: theme.colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing.m,
  },
  modalText: {
    marginBottom: theme.spacing.s,
    textAlign: 'center',
    color: theme.colors.placeHolder,
    fontWeight: 'bold',
    fontSize: theme.spacing.l,
  },
  view3: {
    flexDirection: 'row',
  },
  textStyle2: {
    color: theme.colors.placeHolder,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icons: {
    paddingRight: theme.spacing.s,
  },
});

export default Modal2;
