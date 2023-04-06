import { Message, messageStore } from "../stores/messages-store";
import io from "socket.io-client";
import { useEffect } from "react";
import messageService from "../services/message-service";
import { userStore } from "../stores/user-store";

const socket = io("http://localhost:8000");
export const useChat = () => {
  const sendMessage = async (message: Message) => {
    await messageService.createMessage(message);
  };
  const onLogOut = () => {
    socket.disconnect();
  };

  useEffect(() => {
    socket.on("active_users", (name) => {
      userStore.setConnectedUsers(name);
    });

    socket.on("send_message", (data) => {
      messageStore.setMessage(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return { sendMessage, onLogOut, socket };
};
