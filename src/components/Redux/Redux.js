import React from "react";
import PropTypes from "prop-types";
import Filters from "../Fillters/Filters";
import TodoList from "../TodoList/TodoList";

Redux.propTypes = {};

function Redux(props) {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "Gray",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Filters></Filters>
      <TodoList></TodoList>
    </div>
  );
}

export default Redux;
