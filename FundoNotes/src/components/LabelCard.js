import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../utilities/StylingConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { fetchLabel } from '../services/LabelServices';
import { labelsData } from '../redux/Action';
import {AuthContext} from '../navigation/AutenticationProvider';
import {deleteLabel, updateLabel} from '../services/LabelServices';
const LabelCard = ({label, itemId}) => {
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);
  const [item, setItem] = useState(label);
const dispatch = useDispatch();
  const getLabels = async () => {
    
    const labelData = await fetchLabel(user.uid);
    dispatch(labelsData(labelData));
  };
  const handleEditLabel = (itemId, item) => {
    setShow(!show);
    updateLabel(user.uid, itemId, item);
    getLabels()
  };

  const handleDelete = itemId => {
    deleteLabel(user.uid, itemId);
    getLabels()
    setShow(false)
  };

  return (
    <View style={styles.container}>
      {show ? (
        <TouchableOpacity
          style={styles.view2}
          onPress={() => {
            handleDelete(itemId);
          }}>
          <MaterialCommunityIcons
            name="delete-forever-outline"
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.view2}>
          <MaterialCommunityIcons
            name="label-outline"
            size={30}
            color={'black'}
          />
        </View>
      )}
      <TouchableOpacity
        style={{width: 60, height: 30}}
        onPress={() => handleEditLabel(itemId, item)}>
        {show ? (
          <TextInput
            value={item}
            placeholder={label}
            onChangeText={data => setItem(data)}
            style={{
              color: 'black',
              fontSize: theme.spacing.m,
              marginTop: 12,
              width: 190,
              height: 37,
              borderWidth: 0.3,
              borderColor: 'black',
            }}
          />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: theme.spacing.s, marginLeft: 150}}
        onPress={() => handleEditLabel(itemId, item)}>
        {show ? (
          <AntDesign name="check" size={27} color={'black'} />
        ) : (
          <Entypo name="edit" size={30} color={'black'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LabelCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.m,
    alignSelf: 'center',
  },
  label: {
    color: 'black',
    fontSize: theme.spacing.m,
    marginTop: 12,
    width: 190,
    height: 37,
  },
  view2: {
    marginTop: theme.spacing.s,
  },
});
