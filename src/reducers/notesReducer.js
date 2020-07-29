import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../types/noteActionTypes';

const initialState = [];

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
