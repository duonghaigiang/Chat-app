import { UserAddOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Form, Input, Space, Tooltip } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AuthContext/AppProvider";
import Message from "./Message";
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
  const { selectedRoom, members, setInviteModal } = useContext(AppContext);
  return (
    <WrapperStyleder>
      {selectedRoom !== undefined ? (
        <>
          <HeaderStyle>
            <div className="header">
              <p className="header__title">
                {selectedRoom ? selectedRoom.name : ""}
              </p>
              <span className="header__depscription">
                {selectedRoom ? selectedRoom.description : ""}
              </span>
            </div>
            <ButtonGroupStyle>
              <Button
                icon={<UserAddOutlined></UserAddOutlined>}
                onClick={() => setInviteModal(true)}
              >
                Moi
              </Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName}>
                    <Avatar src={member.photoUrl}>
                      {member.photoUrl
                        ? " "
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
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
        </>
      ) : (
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Alert
            message="Warning"
            type="warning"
            showIcon
            closable
            style={{ margin: 5 }}
          />
        </Space>
      )}
    </WrapperStyleder>
  );
}

export default ChatWindow;
