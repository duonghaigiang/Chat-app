import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSlice } from "../Fillters/filterSilice";
const { Search } = Input;
export default function Filters() {
  const [valueSearch, setvalueSearch] = useState();
  const dispatch = useDispatch();
  const handelvalue = (e) => {
    setvalueSearch(e.target.value);
    dispatch(filterSlice.actions.searchFillterAction(e.target.value));
  };

  const [valueSatus, setValueStatus] = useState("All");
  const handelValueStatus = (e) => {
    setValueStatus(e.target.value);
    dispatch(filterSlice.actions.statusFillterAction(e.target.value));
  };
  const [filterValuePriority, setFilterValuePriority] = useState([]);
  const handelFilterValue = (e) => {
    setFilterValuePriority(e);
    dispatch(filterSlice.actions.priorityFillterAction(e));
  };
  console.log("filterValuePriority", filterValuePriority);
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handelvalue}
          value={valueSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handelValueStatus} value={valueSatus}>
          <Radio value="All">All</Radio>
          <Radio value="Complted">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handelFilterValue}
          value={filterValuePriority}
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
      </Col>
    </Row>
  );
}
