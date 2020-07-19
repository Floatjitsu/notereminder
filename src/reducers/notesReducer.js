import { ADD_NOTE } from '../types/noteActionTypes';

const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default notesReducer;
