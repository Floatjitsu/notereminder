import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { deletenote } from '../actions/noteActions';
import deleteNoteFromStorage from '../storage/deleteNote';
import NoteDetailForm from '../components/NoteDetailForm';

const NoteDetailScreen = ({ navigation }) => {
  const noteId = navigation.getParam('noteId');
  const title = navigation.getParam('title');
  const notes = navigation.getParam('notes');

  const dispatch = useDispatch();
  const deleteNote = (id) => dispatch(deletenote(id));

  const onDelete = async (id) => {
    await deleteNoteFromStorage(id);
    deleteNote(id);
    navigation.goBack();
  };

  return (
    <NoteDetailForm
      noteId={noteId}
      title={title}
      notes={notes}
      onDelete={onDelete}
    />
  );
};

const styles = StyleSheet.create({});

export default NoteDetailScreen;
