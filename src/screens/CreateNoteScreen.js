import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import moment from 'moment';
import { addnote } from '../actions/noteActions';
import DateTimePicker from '@react-native-community/datetimepicker';
import saveNoteToStorage from '../storage/saveNote';

const CreateNoteScreen = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [showSetReminderButton, setShowSetReminderButton] = useState(true);
  const [showReminderButtons, setShowReminderButtons] = useState(false);
  const [dateTimePickerMode, setDateTimePickerMode] = useState('date');
  const [show, setShow] = useState(false); //for showing DateTimePicker
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const dispatch = useDispatch();
  const addNote = (note) => dispatch(addnote(note));

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

  const onSaveNote = async () => {
    const note = {
      id: generateId(),
      title: noteTitle,
      notes,
      reminder: {
        date: reminderDate,
        time: reminderTime
      }
    };
    try {
      await saveNoteToStorage(note);
      addNote(note);
      navigation.goBack();
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <Input label="Title" value={noteTitle} onChangeText={setNoteTitle} />
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
      <Button title="Save Note" type="outline" onPress={onSaveNote} />
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

export default CreateNoteScreen;
