import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../features/login/login";
import ChatRoom from "../features/chat-room/chat-room";
const ChatRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<ChatRoom />} />
        </Routes>
      </Router>
    </>
  );
};

export default ChatRouter;
