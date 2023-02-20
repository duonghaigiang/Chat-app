import { filterSlice } from "../Fillters/filterSilice";
import { todoSlice } from "../TodoList/todoSilice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  filter: filterSlice,
  todoList: todoSlice,
});
export default rootReducer;
