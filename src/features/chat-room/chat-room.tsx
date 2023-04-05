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
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontSize: "20px" }}>
          World Of Warcraft Chat Room
        </span>
        <Tooltip title="Log-out">
          <LogoutOutlined
            onClick={onLogOut}
            style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
          />
        </Tooltip>
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
