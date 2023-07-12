import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {fetchLabel} from '../services/LabelServices';
import theme from '../utilities/StylingConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {labelsData} from '../redux/Action';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../navigation/AutenticationProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ReminderSearch = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [layout, setLayout] = useState(true);
  const [show, setShow] = useState(true);
  const [searchData,setSearchData] = useState([])
  const dispatch = useDispatch();
  const getLabels = async () => {
    const labelData = await fetchLabel(user.uid);
    dispatch(labelsData(labelData));
    setShow(false);
  };
  const dataLabel = useSelector(state => state.reducer.labelData);

  const getSearchdata = word => {
    const searchedData = notes.filter(
      item =>
        item.Title?.toUpperCase()?.includes(word.toUpperCase()) ||
        item.Note?.toUpperCase()?.includes(word.toUpperCase()),
    );
    setSearchData(searchedData);
  };


  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getLabels());
    return subscribe;
  }, [dataLabel]);
  return (
    <View>
      <View style={styles.searchConatiner}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TextInput
          value={search}
          placeholderTextColor={'grey'}
          placeholder="Search your notes here"
          style={styles.text}
          onChangeText={text => setSearch(text)}
        />
      </View>
      <View>
        <View style={styles.labelContainer}>
          <Text style={styles.text3}>Labels</Text>
          <TouchableOpacity onPress={() => setLayout(!layout)}>
            {layout ? (
              <Text style={styles.text2}>Less</Text>
            ) : (
              <Text style={styles.text2}>More</Text>
            )}
          </TouchableOpacity>
        </View>
        <View  style = {layout ? styles.grid : styles.column} >
          {show && <ActivityIndicator color={theme.colors.box1} size={30} />}
          {dataLabel.map((item) => (
            
            <View>
              
              <TouchableOpacity style={styles.label}>
                <MaterialCommunityIcons
                  color={'black'}
                  size={30}
                  name="label-outline"
                />
              </TouchableOpacity>
              <Text style={styles.labelText}>{item.labelName}</Text>
              
            </View>
          ))}
        </View>
        <View style={{margin: 30}}>
          <Text style={styles.text3}>colors</Text>
          <TouchableOpacity
            style={styles.label2}
            onPress={() => navigation.navigate('Default')}>
            <Feather name="droplet" color={'grey'} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReminderSearch;

const styles = StyleSheet.create({
  searchConatiner: {
    backgroundColor: theme.colors.box1,
    height: theme.spacing.xxl,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: theme.spacing.m,
    marginLeft: theme.spacing.m,
  },
  arrow: {
    marginTop: theme.spacing.l,
    marginLeft: theme.spacing.l,
  },
  text2: {
    color: theme.colors.link,
    marginLeft: theme.width.width,
  },
  text3: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    margin: theme.spacing.l,
  },
  label: {
    borderRadius: 100,
    backgroundColor: theme.colors.box1,
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing.xxl,
    width: theme.spacing.xxl,
    marginHorizontal: theme.spacing.l,
    marginVertical: theme.spacing.m,
  },
  labelText: {
    marginHorizontal: 30,
    color: 'black',
    width: 50,
  },
  label2: {
    borderRadius: 100,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,

    marginVertical: theme.spacing.m,
  },
  grid:{
flexDirection:'row',
flexWrap: 'wrap'
  },
  column:{
    flexDirection:'row',
   
  }
});
