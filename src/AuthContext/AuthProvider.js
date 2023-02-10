import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { createBrowserHistory } from "@remix-run/router";
import { auth } from "../FireBase/config";
import { createContext } from "react";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
AuthProvider.propTypes = {};
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const historyPush = useNavigate();
  useEffect(() => {
    const unsubcibed = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log({ user });
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setLoading(false);
        historyPush("/chatroom");
        return;
      }
      historyPush("/login");
      setLoading(false);
    });
    return () => {
      unsubcibed();
    };
  }, [historyPush]);
  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
