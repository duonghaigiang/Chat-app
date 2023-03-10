import { Button, Col, Row, Typography } from "antd";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../FireBase/config";
import { addDocoment, generateKeywords } from "../../FireBase/service";
const { Title } = Typography;
Login.propTypes = {};
const FbProvider = new FacebookAuthProvider();
function Login(props) {
  const historyPush = useNavigate();
  const handelLoginFb = async () => {
    await signInWithPopup(auth, FbProvider).then((respond) => {
      console.log("respond", respond);
      addDocoment("users", {
        displayName: respond.user.displayName,
        email: respond.user.email,
        photoUrl: respond.user.photoURL,
        uid: respond.user.uid,
        provderId: respond.providerId,
        keyWord: generateKeywords(respond.user.displayName),
      });
    });
    // }
  };
  const handelRudux = () => {
    historyPush("/redux");
  };
  //displayName: user.displayName,
  // email: user.email,
  // photoUrl: user.photoURL,
  // uid: user.uid,
  // provderId: UserCredentialImpl.provderId,
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} lever={3}>
            Chat Room
          </Title>
          <Button
            onClick={handelRudux}
            style={{ width: "100%", marginBottom: 5 }}
          >
            Rudux
          </Button>
          <Button style={{ width: "100%" }} onClick={handelLoginFb}>
            Đăng nhập bằng FB
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
