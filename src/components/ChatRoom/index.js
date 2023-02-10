import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
ChatRoom.propTypes = {};

function ChatRoom(props) {
  return (
    <div>
      <Row>
        <Col span={8}>
          <SideBar></SideBar>
        </Col>
        <Col span={16}>
          <ChatWindow></ChatWindow>
        </Col>
      </Row>
    </div>
  );
}

export default ChatRoom;
