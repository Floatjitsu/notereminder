import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { deletenote } from '../actions/noteActions';
import deleteNoteFromStorage from '../storage/deleteNote';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.getParam('noteId');

  const [noteTitle, setNoteTitle] = useState(navigation.getParam('title'));
  const [notes, setNotes] = useState(navigation.getParam('notes'));

  const dispatch = useDispatch();
  const deleteNote = (id) => dispatch(deletenote(id));

  const onDelete = async (id) => {
    await deleteNoteFromStorage(id);
    deleteNote(id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input
        inputStyle={styles.titleInput}
        value={noteTitle}
        onChangeText={(newTitle) => setNoteTitle(newTitle)}
      />
      <Input
        value={notes}
        multiline
        onChangeText={(newNotes) => setNotes(newNotes)}
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

export default NoteDetailScreen;
