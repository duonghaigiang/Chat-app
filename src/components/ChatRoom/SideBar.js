import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import UserInfor from "./UserInfor";
import RoomList from "./RoomList";
import styled from "styled-components";
SideBar.propTypes = {};
const SideBarStyle = styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh;
`;
function SideBar(props) {
  return (
    <SideBarStyle>
      <Row>
        <Col span={24}>
          <UserInfor></UserInfor>
        </Col>
        <Col span={24}>
          <RoomList></RoomList>
        </Col>
      </Row>
    </SideBarStyle>
  );
}

export default SideBar;
