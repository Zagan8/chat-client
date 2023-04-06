import Login from "../features/login/login";
import ChatRoom from "../features/chat-room/chat-room";
import { useChat } from "../hooks/use-chat";
import { userStore } from "../stores/user-store";
import { observer } from "mobx-react-lite";

const ChatRouter = () => {
  const isLoggedIn = Boolean(userStore.currentUser);

  const { sendMessage, socket } = useChat();

  return isLoggedIn ? (
    <ChatRoom sendMessage={sendMessage} />
  ) : (
    <Login socket={socket} />
  );
};

export default observer(ChatRouter);
