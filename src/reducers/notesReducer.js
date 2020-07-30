import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../types/noteActionTypes';

/* Remove these two constants for production */
const initialNoteWithReminder = {
  id: '1',
  title: 'A note for testing',
  notes: 'Some notes',
  reminder: {
    date: '3 Aug 2020',
    time: '15:22'
  }
};

const initialNoteWithoutReminder = {
  id: '2',
  title: 'A note without reminder',
  notes: 'Some more notes',
  reminder: {}
};

const initialState = [initialNoteWithReminder, initialNoteWithoutReminder];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    case EDIT_NOTE:
      return state.map((note) => {
        return note.id === action.payload.id ? action.payload : note;
      });
    default:
      return state;
  }
};

export default notesReducer;
