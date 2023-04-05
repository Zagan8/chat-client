import React, { useEffect, useRef } from "react";
import { Col, Layout, Row } from "antd";
import Chat from "../chat/chat";
import UsersPanel from "../users-panel/users-panel";
import { userStore } from "../../stores/user-store";
import { useChat } from "../../hooks/use-chat";
import { messageStore } from "../../stores/messages-store";
import { Socket } from "socket.io-client";
const { Header } = Layout;

const ChatRoom: React.FC = () => {
  const { sendMessage, socket } = useChat();

  useEffect(() => {
    socket.emit("create_user", {
      name: userStore.currentUser,
      room: "wow",
    });
    socket.on("receive_data", (data) => {
      messageStore.setMessages(data.messages);
      userStore.setConnectedUsers(data.users);
    });
    socket.on("get_messages", (data) => {
      console.log(data);
      messageStore.setMessages(data);
    });
  }, [socket]);

  return (
    <>
      <Header>
        <span style={{ color: "white", fontSize: "20px" }}>
          World Of Warcraft Chat Room
        </span>
      </Header>
      <Row>
        <Col span={4}>
          <UsersPanel />
        </Col>
        <Col span={20}>{<Chat sendMessage={sendMessage} />}</Col>
      </Row>
    </>
  );
};

export default ChatRoom;
