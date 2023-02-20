import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      name: "Learn",
      complted: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Studing",
      complted: true,
      priority: "High",
    },
    {
      id: 3,
      name: "Searching",
      complted: false,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    statusTodo: (state, action) => {
      const result = state.find((todo) => todo.id === action.payload);
      if (result) {
        result.complted = !result.complted;
      }
    },
  },
});
