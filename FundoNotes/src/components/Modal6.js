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
import {useDispatch} from 'react-redux';
import {dateAndTime} from '../redux/Action';
const Modal6 = ({visible, onRequestClose}) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedtime] = useState(new Date());
  const dispatch = useDispatch();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleConfirm = (date, time) => {
    dispatch(dateAndTime(date, time));
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = time => {
    setSelectedtime(time);
    hideTimePicker();
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
                onPress={showTimePicker}>
                <View>
                  <Text style={styles.textStyle2}>Choose time</Text>
                  <Text style={styles.textStyle2}>
                    {selectedTime.getTime()}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              date={selectedDate}
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePicker}
            />
            <DateTimePickerModal
              date={selectedTime}
              isVisible={timePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleConfirm(selectedDate, selectedTime)}>
            <Text>Save</Text>
          </TouchableOpacity>
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
