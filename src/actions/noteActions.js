import { ADD_NOTE } from '../types/noteActionTypes';

export const addnote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  };
};
