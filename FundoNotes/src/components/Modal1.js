import React, {useState, useContext, useEffect, useCallback} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import theme from '../utilities/StylingConstants';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {AuthContext} from '../navigation/AutenticationProvider';
import {fetchUser, updateUser} from '../services/UserServices';
import Modal2 from './Modal2';
const Modal1 = ({modalVisible, setModalVisible}) => {
  const {logout, user} = useContext(AuthContext);
  const [userdata, setUserData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [profile, setProfile] = useState('');
  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const getUser = async () => {
 
    const userDetails = await fetchUser(user?.uid);
    setUserData(userDetails);
    setProfile(userDetails?.profilePic)
  };

  useEffect(() => {
    getUser();
  }, []);
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile(image.path);
      submitImage(image.path);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile(image.path);
      submitImage();
    });
  };
  const submitImage = async () => {
    const uploadUri = profile;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    try {
      await storage.ref(fileName).putFile(uploadUri);

      const url = storage.ref(fileName).getDownloadURL();
      updateUser(user?.uid, url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.centeredView}>
      {!isVisible ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={setModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {user?.photoURL ? (
                <Image style={styles.image2} source={{uri: user?.photoURL}} />
              ) : (
                <Pressable
                  onPress={() => {
                    handleModal();
                  }}>
                  <Image
                    style={styles.image2}
                    source={
                      profile
                        ? {uri: profile}
                        : require('../utilities/images/ProfilePic.jpeg')
                    }
                  />
                </Pressable>
              )}
              <Text style={styles.modalText}>
                {userdata ? userdata?.fullName : user?.displayName}
              </Text>
              <Text style={styles.modalText}>
                {userdata ? userdata?.email : user?.email}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => logout()}>
                <Text style={styles.textStyle}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal2
          openCamera={openCamera}
          pickImage={pickImage}
          visible={isVisible}
          onRequestClose={handleModal}
        />
      )}
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
    paddingHorizontal: theme.spacing.xxl,
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
    padding: theme.spacing.s,
  },
  buttonOpen: {
    backgroundColor: theme.colors.foreground,
  },
  buttonClose: {
    backgroundColor: theme.colors.foreground,
    marginBottom: theme.spacing.m,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: theme.spacing.s,
    textAlign: 'center',
    color: theme.colors.foreground,
    padding: theme.spacing.s,
    fontWeight: 'bold',
    fontSize: theme.spacing.m,
  },
  image: {
    width: theme.spacing.l,
    height: theme.spacing.l,
    borderRadius: 100,
    alignSelf: 'center',
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: theme.colors.background,
    margin: theme.spacing.l,
  },
});

export default Modal1;
