// import AppContext from "antd/es/app/context";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useFireStore } from "../Hook/firestore";
import { AuthContext } from "./AuthProvider";
AppProvider.propTypes = {};
export const AppContext = createContext();
function AppProvider({ children }) {
  const [addRoomvisible, setAddRoomvisible] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const {
    user: { uid },
  } = useContext(AuthContext);
  const condition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFireStore("rooms", condition);
  console.log({ rooms });
  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId),

    [rooms, selectedRoomId]
  );
  const usercondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom ? selectedRoom.members : "",
    };
  }, [selectedRoom ? selectedRoom.members : ""]);
  const members = useFireStore("users", usercondition);
  console.log("members", { members });
  console.log("abc", { selectedRoom });
  return (
    <AppContext.Provider
      value={{
        rooms,
        addRoomvisible,
        setAddRoomvisible,
        setSelectedRoomId,
        selectedRoomId,
        selectedRoom,
        members,
        inviteModal,
        setInviteModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
