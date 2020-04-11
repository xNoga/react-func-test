import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../slices/dataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});
