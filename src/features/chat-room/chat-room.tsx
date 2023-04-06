import React from "react";
import { Col, Layout, Row, Tooltip } from "antd";
import Chat from "../chat/chat";
import UsersPanel from "../users-panel/users-panel";
import { LogoutOutlined } from "@ant-design/icons";
import { Message } from "../../stores/messages-store";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

interface Props {
  onLogOut: () => void;
  sendMessage: (message: Message) => void;
}
const ChatRoom: React.FC<Props> = ({ onLogOut, sendMessage }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    onLogOut();
    navigate(0);
  };

  return (
    <div className="chat-room">
      <Header className="header">
        <span className="header-title">World Of Warcraft Chat Room</span>
        <Tooltip title="Log-out">
          <LogoutOutlined className="log-out-btn" onClick={handleLogOut} />
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
