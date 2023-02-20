import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../Fillters/filterSilice";
import { todoSlice } from "../TodoList/todoSilice";
const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todo: todoSlice.reducer,
  },
});
export default store;
