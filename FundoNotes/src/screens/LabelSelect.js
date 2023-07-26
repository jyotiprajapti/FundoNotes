import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../utilities/StylingConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {reducer} from '../redux/Reducer';
import {labelsData} from '../redux/Action';
import {fetchLabel} from '../services/LabelServices';
import {AuthContext} from '../navigation/AutenticationProvider';
import CreateNote from './CreateNote';
const LabelSelect = ({navigation}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setSearch] = useState('');
  const {user} = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleSelectOption = value => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter(option => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const getLabels = async () => {
    const labelData = await fetchLabel(user?.uid);
    dispatch(labelsData(labelData));
    setloading(false);
  };
  const dataLabel = useSelector(state => state.reducer.labelData);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => getLabels());
    return subscribe;
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CreateNote', {labelData: selectedOptions})
          }>
          <Ionicons name="arrow-back" size={theme.spacing.l} color="black" />
        </TouchableOpacity>
        <TextInput
          value={search}
          placeholder="Enter label name"
          placeholderTextColor={'black'}
          onChangeText={text => setSearch(text)}
          style={styles.textInput}
        />
      </View>
      {loading && <ActivityIndicator size={25} color={'pink'} />}
      <View style={styles.container2}>
        {dataLabel.map(option => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleSelectOption(option)}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="label-outline"
              size={28}
              color={theme.colors.text1}
            />
            <Text style={styles.text}>{option.labelName}</Text>
            <Checkbox.Android
              status={
                selectedOptions.includes(option) ? 'checked' : 'unchecked'
              }
              onPress={() => handleSelectOption(option)}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LabelSelect;

const styles = StyleSheet.create({
  textInput: {
    color: 'grey',
    fontSize: theme.spacing.m,
    margin: theme.spacing.l,
  },
  container: {
    flexDirection: 'row',
    margin: theme.spacing.l,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    width: 220,
    margin: theme.spacing.m,
    fontSize: theme.spacing.l,
  },
  container2: {
    marginHorizontal: theme.spacing.l,
  },
});
