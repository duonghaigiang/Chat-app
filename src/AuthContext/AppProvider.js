// import AppContext from "antd/es/app/context";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useFireStore } from "../Hook/firestore";
import { AuthContext } from "./AuthProvider";
AppProvider.propTypes = {};
export const AppContext = createContext();
function AppProvider({ children }) {
  const [addRoomvisible, setAddRoomvisible] = useState(false);
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
  return (
    <AppContext.Provider
      value={{
        rooms,
        addRoomvisible,
        setAddRoomvisible,
        setSelectedRoomId,
        selectedRoomId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
