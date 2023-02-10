import React, { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Message from "./Message";
import { AppContext } from "../../AuthContext/AppProvider";
ChatWindow.propTypes = {};
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__depcription {
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyle = styled.div`
  display: flex;
  align-items: center;
`;
const ContentStyleder = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;
const WrapperStyleder = styled.div`
  height: 100vh;
`;
const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
const FromStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid #ccc;
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
function ChatWindow(props) {
  const { rooms, selectedRoomId } = useContext(AppContext);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId),

    [rooms, selectedRoomId]
  );
  console.log("abc", { selectedRoom });
  return (
    <WrapperStyleder>
      <HeaderStyle>
        <div className="header">
          <p className="header__title">
            {selectedRoom ? selectedRoom.name : "room"}
          </p>
          <span className="header__depscription">
            {selectedRoom ? selectedRoom.description : "description"}
          </span>
        </div>
        <ButtonGroupStyle>
          <Button icon={<UserAddOutlined></UserAddOutlined>}>Moi</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyle>
      </HeaderStyle>
      <ContentStyleder>
        <MessageListStyled>
          <Message
            text="abc"
            displayName="Giang"
            createAt="today"
            photoUrl="A"
          ></Message>
          <Message
            text="abc"
            displayName="Duong"
            createAt="today"
            photoUrl="B"
          ></Message>
          <Message
            text="abcsc"
            displayName="Giang"
            createAt="today"
            photoUrl="C"
          ></Message>
        </MessageListStyled>
        <FromStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="tin nhan"
            ></Input>
          </Form.Item>
          <Button>Gui</Button>
        </FromStyled>
      </ContentStyleder>
    </WrapperStyleder>
  );
}

export default ChatWindow;
