import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { addnote } from '../actions/noteActions';
import saveNoteToStorage from '../storage/saveNote';
import CreateNoteForm from '../components/CreateNoteForm';

const CreateNoteScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const addNote = (note) => dispatch(addnote(note));

  const saveNote = async (id, title, notes, reminder) => {
    const note = {
      id,
      title,
      notes,
      reminder
    };
    try {
      await saveNoteToStorage(note);
      addNote(note);
      navigation.goBack();
    } catch (e) {}
  };

  return <CreateNoteForm onSaveNote={saveNote} />;
};

const styles = StyleSheet.create({});

export default CreateNoteScreen;
