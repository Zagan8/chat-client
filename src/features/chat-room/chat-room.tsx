import React from "react";
import { Col, Layout, Row } from "antd";
import Chat from "../chat/chat";
import UsersPanel from "../users-panel/users-panel";
import { Message } from "../../stores/messages-store";

const { Header } = Layout;

interface Props {
  sendMessage: (message: Message) => void;
}

const ChatRoom: React.FC<Props> = ({ sendMessage }) => {
  return (
    <div className="chat-room">
      <Header className="header">
        <span className="header-title">World Of Warcraft Chat Room</span>
      </Header>
      <Row>
        <Col span={4}>
          <UsersPanel />
        </Col>
        <Col span={20}>{<Chat sendMessage={sendMessage} />}</Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
