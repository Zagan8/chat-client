import { Message, messageStore } from "../stores/messages-store";
import io, { Socket } from "socket.io-client";
import { useEffect, useRef } from "react";
import { userStore } from "../stores/user-store";
import { useNavigate } from "react-router-dom";

export const useChat = () => {
  const socketRef = useRef<Socket>();
  const navigate = useNavigate();
  const sendMessage = (message: Message) => {
    socketRef.current?.emit("send_message", message);
  };
  const onLogOut = () => {
    socketRef.current?.disconnect();
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const storedName = localStorage.getItem("user");
    if (!storedName) {
      localStorage.setItem("user", userStore.currentUser);
    } else {
      userStore.setCurrentUser(storedName);
    }
    const storedSocket = localStorage.getItem("socketId");
    const socket = io("http://localhost:8000", { query: { id: storedSocket } });
    socketRef.current = socket;
    socket.on("connect", () => {
      localStorage.setItem("socketId", socket.id);
    });

    socketRef.current?.emit("create_user", {
      name: userStore.currentUser,
      room: "wow",
    });
    socketRef.current?.on("receive_data", (data) => {
      messageStore.setMessages(data.messages);
      userStore.setConnectedUsers(data.users);
    });
    socketRef.current?.on("get_messages", (data) => {
      messageStore.setMessages(data);
    });
    socketRef.current?.on("delete_user", (data) => {
      userStore.deleteConnectedUser(data);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);
  return { sendMessage, onLogOut };
};
