import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { addnote } from '../actions/noteActions';

const CreateNoteScreen = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [notes, setNotes] = useState('');

  const dispatch = useDispatch();
  const addNote = (note) => dispatch(addnote(note));

  const generateId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
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
      <Button
        title="Save Note"
        type="outline"
        onPress={() => {
          addNote({
            id: generateId(),
            title: noteTitle,
            notes
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  notesInput: {
    height: 150
  }
});

export default CreateNoteScreen;
