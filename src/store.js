import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/task';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  }
});