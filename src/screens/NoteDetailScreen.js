import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deletenote, editnote } from '../actions/noteActions';
import deleteNoteFromStorage from '../storage/deleteNote';
import NoteDetailForm from '../components/NoteDetailForm';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.getParam('noteId');
  const title = navigation.getParam('title');
  const notes = navigation.getParam('notes');
  const reminder = navigation.getParam('reminder');

  const dispatch = useDispatch();
  const deleteNote = (id) => dispatch(deletenote(id));
  const editNote = (newNote) => dispatch(editnote(newNote));

  const onDelete = async (id) => {
    await deleteNoteFromStorage(id);
    deleteNote(id);
    navigation.goBack();
  };

  const onEdit = async (newNote) => {
    editNote(newNote);
    navigation.goBack();
  };

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
