import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deletenote } from '../actions/noteActions';
import deleteNoteFromStorage from '../storage/deleteNote';
import NoteDetailForm from '../components/NoteDetailForm';
import DateTimePicker from '@react-native-community/datetimepicker';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.getParam('noteId');
  const title = navigation.getParam('title');
  const notes = navigation.getParam('notes');
  const reminder = navigation.getParam('reminder');

  const dispatch = useDispatch();
  const deleteNote = (id) => dispatch(deletenote(id));

  const onDelete = async (id) => {
    await deleteNoteFromStorage(id);
    deleteNote(id);
    navigation.goBack();
  };

  const onEdit = async (id, newNote) => {};

  return (
    <NoteDetailForm
      noteId={noteId}
      title={title}
      notes={notes}
      reminder={reminder}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  );
};

const styles = StyleSheet.create({});

export default NoteDetailScreen;
