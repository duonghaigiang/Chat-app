import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./AuthContext/AuthProvider";
import AppProvider from "./AuthContext/AppProvider";
import AddRoomModal from "./components/Modal/AddRoomModal";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/chatroom" element={<ChatRoom></ChatRoom>}></Route>
          </Routes>
          <AddRoomModal></AddRoomModal>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
