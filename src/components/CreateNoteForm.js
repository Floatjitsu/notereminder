import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const CreateNoteForm = ({ onSaveNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [showSetReminderButton, setShowSetReminderButton] = useState(true);
  const [showReminderButtons, setShowReminderButtons] = useState(false);
  const [dateTimePickerMode, setDateTimePickerMode] = useState('date');
  const [show, setShow] = useState(false); //for showing DateTimePicker
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [showInputErrorMessage, setShowInputErrorMessage] = useState(false);

  const generateId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  };

  const getDefaultReminderDate = () => {
    return moment().add(5, 'days').format('D MMM YYYY');
  };

  const getDefaultReminderTime = () => {
    return moment().format('HH:mm');
  };

  //DateTimePicker Event Handler
  const onChange = (event, selectedDate) => {
    setShow(false);
    switch (dateTimePickerMode) {
      case 'date':
        setReminderDate(moment(selectedDate).format('D MMM YYYY'));
        break;
      case 'time':
        setReminderTime(moment(selectedDate).format('HH:mm'));
        break;
    }
  };

  const onSave = () => {
    if (noteTitle !== '') {
      onSaveNote(generateId(), noteTitle, notes, generateReminderInformation());
      setShowInputErrorMessage(false);
    } else {
      setShowInputErrorMessage(true);
    }
  };

  // Builds an object out of reminder date and time, if set
  const generateReminderInformation = () => {
    return reminderDate === '' && reminderTime === ''
      ? {}
      : {
          date: reminderDate,
          time: reminderTime
        };
  };

  return (
    <View style={styles.container}>
      <Input
        label="Title"
        value={noteTitle}
        onChangeText={setNoteTitle}
        errorMessage={showInputErrorMessage ? 'Title can not be empty' : null}
      />
      <Input
        inputStyle={styles.notesInput}
        multiline
        placeholder="Write down additional notes"
        label="Notes"
        textAlignVertical="top"
        value={notes}
        onChangeText={setNotes}
      />
      <View style={styles.dateTimeButtonsContainer}>
        {showSetReminderButton && (
          <Button
            title="Set Reminder"
            onPress={() => {
              setShowSetReminderButton(false);
              setShowReminderButtons(true);
              setReminderDate(getDefaultReminderDate());
              setReminderTime(getDefaultReminderTime());
            }}
          />
        )}
        {showReminderButtons && (
          <>
            <Button
              title="Add Date"
              onPress={() => {
                setShow(true);
                setDateTimePickerMode('date');
              }}
            />
            <Button
              title="Add Time"
              onPress={() => {
                setShow(true);
                setDateTimePickerMode('time');
              }}
            />
          </>
        )}
      </View>
      {showReminderButtons && (
        <Input
          label="Reminder"
          disabled
          value={reminderDate + ' ' + reminderTime}
        />
      )}
      {show && (
        <DateTimePicker
          mode={dateTimePickerMode}
          value={new Date()}
          onChange={onChange}
        />
      )}
      <Button title="Save Note" type="outline" onPress={onSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  dateTimeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  notesInput: {
    height: 150
  }
});

export default CreateNoteForm;
