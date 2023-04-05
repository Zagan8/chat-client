import { Message } from "../stores/messages-store";
import io, { Socket } from "socket.io-client";
const socket = io("http://localhost:8000");

export const useChat = () => {
  const sendMessage = (message: Message) => {
    socket.emit("send_message", message);
  };

  return { sendMessage, socket, Socket };
};
