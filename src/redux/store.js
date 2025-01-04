import { configureStore } from '@reduxjs/toolkit';
import updateReducer from './updateSlice';

export default configureStore({
  reducer: {
    update_redux_slice: updateReducer,
  },
});