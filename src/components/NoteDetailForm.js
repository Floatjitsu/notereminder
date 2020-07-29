import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

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
  const [show, setShow] = useState(false);
  const [dateTimePickerMode, setDateTimePickerMode] = useState('date');

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
      {reminder.date ? (
        <View style={styles.reminderContainer}>
          <MaterialIcons name="alarm" size={24} color="black" />
          <Input containerStyle={{ flex: 1 }} value={reminder.date} />
          <Input containerStyle={{ flex: 1 }} value={reminder.time} />
        </View>
      ) : null}
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
