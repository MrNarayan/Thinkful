import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notes.slice';

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});
