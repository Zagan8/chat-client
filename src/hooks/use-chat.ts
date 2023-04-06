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

  useEffect(() => {
    socket.on("active_users", (users: string[]) => {
      userStore.setConnectedUsers(users);
    });

    socket.on("send_message", (data) => {
      messageStore.setMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return { sendMessage, socket };
};
