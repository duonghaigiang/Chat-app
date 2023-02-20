import { createSlice } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    // tự tạo ra type (name/functon bên dưới )
    searchFillterAction: (state, action) => {
      state.search = action.payload; // thay đổi trực tiếp trên state hiện tại mà không cần gọi lại (...state)
    },
    statusFillterAction: (state, action) => {
      state.status = action.payload;
    },
    priorityFillterAction: (state, action) => {
      state.priority = action.payload;
    },
  },
});
