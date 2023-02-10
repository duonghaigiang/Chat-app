import { Avatar, Button, Typography } from "antd";
import React, { createContext, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { auth } from "../../FireBase/config";
UserInfor.propTypes = {};
const InforStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  .userName {
    color: white;
    margin-left: 5px;
  }
`;
const handelSignOut = () => {
  auth.signOut();
};
function UserInfor(props) {
  // useEffect(() => {
  //   const q = collection(db, "users");
  //   onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);
  const {
    user: { displayName, photoURL },
    // data,
  } = useContext(AuthContext);
  console.log("abcsa", { user: photoURL });
  return (
    <InforStyle>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "user" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="userName">{displayName}</Typography.Text>
      </div>
      <Button onClick={handelSignOut} ghost>
        Dang xuat
      </Button>
    </InforStyle>
  );
}

export default UserInfor;
