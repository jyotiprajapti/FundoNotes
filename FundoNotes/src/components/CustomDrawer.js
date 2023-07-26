import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import theme from '../utilities/StylingConstants';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fetchLabel} from '../services/LabelServices';
import {labelsData} from '../redux/Action';
import {useSelector} from 'react-redux';
import {AuthContext} from '../navigation/AutenticationProvider';
const CustomDrawer = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useContext(AuthContext);
  const getLabels = async () => {
    const labelData = await fetchLabel(user?.uid);
    dispatch(labelsData(labelData));
  };
  const dataLabel = useSelector(state => state.reducer.labelData);
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getLabels());
    return subscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.conatiner2}>
        <Text style={styles.mainText}>Fundo</Text>
        <Text style={styles.mainText}> Notes</Text>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Home')}>
        <Feather
          name="home"
          size={theme.icon.smallIcon}
          color={theme.colors.background}
        />
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Reminder')}>
        <Feather
          name="bell"
          size={theme.icon.smallIcon}
          color={theme.colors.background}
        />
        <Text style={styles.menuItemText}>Reminder</Text>
      </TouchableOpacity>
      <View style = {styles.labelView2} >
        <View style= {styles.labelView} >
          <Text style={styles.menuItemText} >Labels</Text>
          <TouchableOpacity>
            <Text style={styles.menuItemText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Create new label')}>
          <Feather
            name="plus"
            size={theme.icon.smallIcon}
            color={theme.colors.background}
          />
          <Text style={styles.menuItemText}>Create new label</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Archive')}>
        <Feather
          name="archive"
          size={theme.icon.smallIcon}
          color={theme.colors.background}
        />
        <Text style={styles.menuItemText}>Archive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Deleted')}>
        <AntDesign
          name="delete"
          size={theme.icon.smallIcon}
          color={theme.colors.background}
        />
        <Text style={styles.menuItemText}>Deleted</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Settings')}>
        <Feather
          name="settings"
          size={theme.icon.smallIcon}
          color={theme.colors.background}
        />
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.spacing.xl,
  },
  menuItem: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.l,
  },
  menuItemText: {
    fontSize: theme.textVariants.body.fontSize,
    color: theme.colors.background,
    marginLeft: theme.spacing.l,
  },
  mainText: {
    color: theme.colors.background,
    fontSize: theme.textVariants.body.fontSizeBig,
    fontFamily: '',
    fontWeight: 'bold',
  },
  conatiner2: {
    flexDirection: 'row',
    marginBottom: theme.spacing.xl,
    marginLeft: theme.spacing.l,
  },
  labelView:{
    flexDirection:'row',
    gap: theme.width.width3
  },
  labelView2:{
borderTopWidth:1,
borderBottomWidth:1,
borderColor:'grey',
paddingTop: theme.spacing.l
  }
});

export default CustomDrawer;
