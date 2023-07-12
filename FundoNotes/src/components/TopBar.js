import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { toggleGridLabelView } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../utilities/StylingConstants';
import Modal1 from './Modal1';
import {fetchUser} from '../services/UserServices';
import {Image} from 'react-native';
import {AuthContext} from '../navigation/AutenticationProvider';
const TopBar = ({searchPhrase, navigation,targetScreen}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState('');
const dispatch = useDispatch();
  const handleModal = () => {
    setModalVisible(!modalVisible);
  }
  const toggle = useSelector((state)=>state.reducer.toggle)

  const {user} = useContext(AuthContext);
  const getUser = async () => {
    const userDetails = await fetchUser(user.uid);
    setProfile(userDetails?.profilePic);
  }
const getProfile = ()=>{
  if(user.photoURL){
    setProfile(user.photoURL)
  }
  else if(user.profilePic){
    setProfile(user.profilePic)
  }
}

const handleNavigation = ()=>{
  if (targetScreen === 'ReminderSearch') {
    navigation.navigate('ReminderSearch');
  } else if (targetScreen === 'Search') {
    navigation.navigate('Search');
  }
}

  useEffect(() => {
    getUser();
    getProfile();
  }, [profile]);
  return (
    <View style={styles.outerConatiner}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={theme.icon.smallIcon} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.input}>{searchPhrase}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(toggleGridLabelView())}>
          {toggle ? (
            <Feather
              name="grid"
              size={theme.icon.smallIcon}
              color="black"
              style={styles.icons}
            />
          ) : (
            <Feather
              name="list"
              size={theme.icon.smallIcon}
              color="black"
              style={styles.icons}
            />
          )}
        </TouchableOpacity>
        <Pressable onPress={() => handleModal()}>
          <Image
            source={
              profile
                ? {uri: profile}
                : require('../utilities/images/ProfilePic.jpeg')
            }
            style={styles.image}
          />
          
        </Pressable>
        <Modal1 modalVisible={modalVisible} setModalVisible={handleModal} />
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  outerConatiner: {
    marginHorizontal: theme.spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: theme.spacing.m,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: theme.colors.foreground,
    borderRadius: theme.spacing.s,
    padding: 5,
  },
  icons: {
    alignSelf: 'center',
    marginLeft: theme.spacing.l,
  },
  input: {
    fontSize: theme.textVariants.body.fontSize,
    marginLeft: theme.spacing.m,
    marginVertical: theme.spacing.s,
    width: theme.width.widthButton,
    color: theme.colors.placeHolder,
  },

  image: {
    width: theme.spacing.l,
    height: theme.spacing.l,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: theme.spacing.l,
    marginTop: 13,
  },
});
