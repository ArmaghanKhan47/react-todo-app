import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: []
  },
  reducers: {
    addTask(state, action) {
      state.value.push(action.payload);
    },
    removeTask(state, action) {
      let updated = [...state.value];
      updated.splice(action.payload, 1);
      state.value = updated;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = taskSlice.actions

export default taskSlice.reducer