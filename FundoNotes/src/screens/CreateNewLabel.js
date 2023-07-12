import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import theme from '../utilities/StylingConstants';
import {FlatList,  TextInput} from 'react-native-gesture-handler';
import LabelCard from '../components/LabelCard';
import {AuthContext} from '../navigation/AutenticationProvider';
import {createLabel, fetchLabel} from '../services/LabelServices';
import {labelsData} from '../redux/Action';
const CreateNewLabel = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(true);
  const {user} = useContext(AuthContext);
  const [label, setLabel] = useState('');
  const [show,setShow] = useState(true);
  const handleCreateLabel = () => {
    createLabel(user.uid, label);
    handleToggle();
    getLabels()
    setLabel('');
    setIsClicked(true)
  };
  const handleToggle = () => {
    setIsClicked(!isClicked);
  };
  const dispatch = useDispatch();

  const getLabels = async () => {
    
    const labelData = await fetchLabel(user.uid);
    dispatch(labelsData(labelData));
    setShow(false)
  };
  const dataLabel = useSelector(state => state.reducer.labelData);

 

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getLabels());
    return subscribe;

  }, [dataLabel]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit labels</Text>
      </View>
      
      <View style={isClicked ? styles.labelViewOnClicked : styles.labelView}>
        <TouchableOpacity
          style={{marginTop: theme.spacing.s}}
          onPress={handleToggle}>
          {isClicked ? (
            <AntDesign name="plus" size={30} color={'black'} />
          ) : (
            <Entypo name="cross" size={27} color={'black'} />
          )}
        </TouchableOpacity>
        <TextInput
          value={label}
          onChangeText={text => setLabel(text)}
          placeholder="Create new label"
          placeholderTextColor={theme.colors.background}
          style={{color: 'black', width: 120}}
          onFocus={handleToggle}
        />
      
        <TouchableOpacity
          style={{marginTop: theme.spacing.s, marginLeft: 100}}
          onPress={handleCreateLabel}>
          {!isClicked && <AntDesign name="check" size={27} color={'black'} />}
        </TouchableOpacity>
      </View>
      <View>
      {show && <ActivityIndicator size={'large'}
                color={'pink'} />}
        <FlatList
          data={dataLabel}
          renderItem={({item}) => (
            <TouchableOpacity  >
              <LabelCard
                {...item}
                label={item.labelName} 
               itemId={item.id}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CreateNewLabel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.spacing.l,
  },
  header: {
    flexDirection: 'row',
    gap: theme.spacing.s,
  },
  headerText: {
    color: 'black',
    fontSize: theme.spacing.l,
  },
  labelView: {
    flexDirection: 'row',
    gap: theme.spacing.m,
    marginVertical: theme.spacing.m,
  },
  labelViewOnClicked: {
    flexDirection: 'row',
    gap: theme.spacing.m,
    marginVertical: theme.spacing.m,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'black',
    borderBottomColor: 'black',
  },
});
