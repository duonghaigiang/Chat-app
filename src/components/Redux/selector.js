import { createSelector } from "@reduxjs/toolkit";

const selectTextSearch = (state) => state.filter.search;
const selectTodo = (state) => state.todo;
const selectStatus = (state) => state.filter.status;
const selectPriority = (state) => state.filter.priority;
const renderTodo = createSelector(
  selectTextSearch,
  selectTodo,
  selectStatus,
  selectPriority,
  (searchText, todoList, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText);
      } else if (status !== "All" && status === "Todo") {
        return priority.length
          ? todo.name.includes(searchText) &&
              !todo.complted &&
              priority.includes(todo.priority)
          : todo.name.includes(searchText) && !todo.complted;
      } else {
        return priority.length
          ? todo.name.includes(searchText) &&
              todo.complted &&
              priority.includes(todo.priority)
          : todo.name.includes(searchText) && todo.complted;
      }
    });
  }
);
export default renderTodo;
