import React from "react";

import ChatRoom from "./features/chat-room/chat-room";
import Login from "./features/login/login";
import { userStore } from "./stores/user-store";
import { useChat } from "./hooks/use-chat";
import { observer } from "mobx-react-lite";

import "./App.scss";

function App() {
  const { sendMessage, socket } = useChat();

  const isLoggedIn = Boolean(userStore.currentUser);

  return isLoggedIn ? (
    <ChatRoom sendMessage={sendMessage} />
  ) : (
    <Login socket={socket} />
  );
}

export default observer(App);
