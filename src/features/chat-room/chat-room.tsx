import React from "react";
import { Col, Layout, Row } from "antd";
import Chat from "../chat/chat";
import UsersPanel from "../users-panel/users-panel";
const { Header } = Layout;
const ChatRoom: React.FC = () => {
  return (
    <>
      <Header>
        <span style={{ color: "white" }}>World Of Warcraft Chat Room</span>
      </Header>
      <Row>
        <Col span={6}>
          <UsersPanel />
        </Col>
        <Col span={18}>
          <Chat />
        </Col>
      </Row>
    </>
  );
};

export default ChatRoom;
