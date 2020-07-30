import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../types/noteActionTypes';

export const addnote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  };
};

export const deletenote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};

export const editnote = (newNote) => {
  return {
    type: EDIT_NOTE,
    payload: newNote
  };
};
