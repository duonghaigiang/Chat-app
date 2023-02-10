import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { AppContext } from "../../AuthContext/AppProvider";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useFireStore } from "../../Hook/firestore";
RoomList.propTypes = {};
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
  }
`;
const TypographyStyled = styled(Typography.Link)`
  display: block;
  color: white;
  margin-bottom: 5px;
`;
function RoomList(props) {
  const { setAddRoomvisible, setSelectedRoomId } = useContext(AppContext);
  const handelClick = () => {
    setAddRoomvisible(true);
  };
  const { rooms } = useContext(AppContext);
  console.log({ rooms });
  return (
    <div>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelStyled header="Danh sach cac phong" key="1">
          {rooms.map((room) => (
            <TypographyStyled
              key={room.id}
              onClick={() => {
                setSelectedRoomId(room.id);
              }}
            >
              {room.name}
            </TypographyStyled>
          ))}
          <Button
            ghost
            icon={<PlusSquareOutlined></PlusSquareOutlined>}
            onClick={handelClick}
          >
            Them phong
          </Button>
        </PanelStyled>
      </Collapse>
    </div>
  );
}

export default RoomList;
