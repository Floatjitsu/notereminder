import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const NoteDetailForm = ({
  noteId,
  title,
  notes,
  onDelete,
  onEdit,
  reminder
}) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [notesText, setNotesText] = useState(notes);
  const [reminderDate, setReminderDate] = useState(reminder.date);
  const [reminderTime, setReminderTime] = useState(reminder.time);
  const [show, setShow] = useState(false);
  const [dateTimePickerMode, setDateTimePickerMode] = useState('date');

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

  return (
    <View style={styles.container}>
      <Input
        inputStyle={styles.titleInput}
        value={noteTitle}
        onChangeText={setNoteTitle}
      />
      <Input
        value={notesText}
        multiline
        onChangeText={(newNotes) => setNotesText(newNotes)}
      />
      {reminderDate ? (
        <View style={styles.reminderContainer}>
          <MaterialIcons name="alarm" size={24} color="black" />
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setShow(true);
              setDateTimePickerMode('date');
            }}
          >
            <Input disabled value={reminderDate} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setShow(true);
              setDateTimePickerMode('time');
            }}
          >
            <Input disabled value={reminderTime} />
          </TouchableOpacity>
        </View>
      ) : null}
      {show && (
        <DateTimePicker
          mode={dateTimePickerMode}
          value={new Date()}
          onChange={onChange}
        />
      )}
      <Button title="Save Note" />
      <View style={{ marginTop: 10 }} />
      <Button
        title="Delete Note"
        buttonStyle={{ backgroundColor: 'red' }}
        onPress={() => onDelete(noteId)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  titleInput: {
    fontWeight: 'bold',
    fontSize: 22
  },
  reminderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  }
});

export default NoteDetailForm;
