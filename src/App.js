import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./AuthContext/AuthProvider";
import AppProvider from "./AuthContext/AppProvider";
import AddRoomModal from "./components/Modal/AddRoomModal";
import InviteMemberModal from "./components/Modal/InviteMembersModal";
import Redux from "./components/Redux/Redux";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/chatroom" element={<ChatRoom></ChatRoom>}></Route>
            <Route path="/redux" element={<Redux></Redux>}></Route>
          </Routes>
          <AddRoomModal></AddRoomModal>
          <InviteMemberModal></InviteMemberModal>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
