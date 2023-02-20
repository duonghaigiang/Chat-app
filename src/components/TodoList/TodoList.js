import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import Todo from "../todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import renderTodo from "../Redux/selector";
import { todoSlice } from "./todoSilice";
export default function TodoList() {
  const [value, setValue] = useState("");
  const [valuePriority, setValuePriority] = useState("");

  const dispatch = useDispatch();

  const todoLists = useSelector(renderTodo);
  console.log("todoolsl", todoLists);
  const inputValue = (e) => {
    setValue(e.target.value);
  };
  const inputPriority = (value) => {
    setValuePriority(value);
  };
  const handelBtnAddTodo = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: value,
        priority: valuePriority,
        complted: false,
      })
    );
    setValuePriority("");
    setValue("");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoLists.map((todo) => (
          <Todo
            name={todo.name}
            id={todo.id}
            prioriry={todo.priority ? todo.priority : "Medium"}
            complted={todo.complted}
            key={todo.id}
          ></Todo>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={inputValue} value={value} />
          <Select
            defaultValue="Medium"
            onChange={inputPriority}
            value={valuePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handelBtnAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
