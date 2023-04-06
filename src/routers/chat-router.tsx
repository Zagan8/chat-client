import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../features/login/login";
import ChatRoom from "../features/chat-room/chat-room";
import { useChat } from "../hooks/use-chat";

const ChatRouter = () => {
  const { sendMessage, onLogOut, socket } = useChat();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login socket={socket} />} />
          <Route
            path="/main"
            element={<ChatRoom onLogOut={onLogOut} sendMessage={sendMessage} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default ChatRouter;
