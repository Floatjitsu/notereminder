import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const NoteDetailForm = ({ noteId, title, notes, onDelete }) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [notesText, setNotesText] = useState(notes);

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
  }
});

export default NoteDetailForm;
