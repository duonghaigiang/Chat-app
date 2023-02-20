export const addTodoAction = (data) => {
  return {
    type: "todoList/addTodo",
    payLoad: data,
  };
};
export const setTodoAction = (data) => {
  return {
    type: "todoList/setTodo",
    payLoad: data,
  };
};
export const addSearchAction = (data) => {
  return {
    type: "filter/search",
    payLoad: data,
  };
};
export const statusAction = (data) => {
  return {
    type: "filter/status",
    payLoad: data,
  };
};
export const filterPriorityAction = (data) => {
  return {
    type: "filter/priority",
    payLoad: data,
  };
};
