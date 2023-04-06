import React, { useEffect, useRef } from "react";
import { Col, Layout, Row, Tooltip } from "antd";
import Chat from "../chat/chat";
import UsersPanel from "../users-panel/users-panel";
import { useChat } from "../../hooks/use-chat";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const ChatRoom: React.FC = () => {
  const { sendMessage, onLogOut } = useChat();
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="chat-room">
      <Header className="header">
        <span className="header-title">World Of Warcraft Chat Room</span>
        <Tooltip title="Log-out">
          <LogoutOutlined className="log-out-btn" onClick={onLogOut} />
        </Tooltip>
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
