import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import theme from '../utilities/StylingConstants';
import {dateAndTime} from '../redux/Action';
import { useDispatch } from 'react-redux';
const Modal6 = ({visible, onRequestClose, handleModalVisible}) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch()

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleConfirm = (selectedDate) => {
    dispatch(dateAndTime(selectedDate));
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = date => {
    setSelectedDate(date);
    hideDatePicker();
  };
 
  

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
              <Text style={styles.modalText}>Add Reminder</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={showDatePicker}>
                <View>
                  <Text style={styles.textStyle2}>Choose date</Text>
                  <Text style={styles.textStyle2}>
                    {selectedDate.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={showDatePicker}>
                <View>
                  <Text style={styles.textStyle2}>Choose time</Text>
                  <Text style={styles.textStyle2}>
                    {selectedDate.getTime()}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              date={selectedDate}
              isVisible={datePickerVisible}
              mode="datetime"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePicker}
            />
           
            <TouchableOpacity
            onPress={() => handleConfirm(selectedDate, selectedDate)}>
            <Text style = {{color: 'black'}} >Save</Text>
            <TouchableOpacity onPress={handleModalVisible}/>
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
    padding: theme.spacing.s,
    margin: theme.spacing.xs,
    flexDirection: 'row',
    borderColor: theme.colors.foreground,
    borderBottomWidth: 0.8,
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
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Modal6;
