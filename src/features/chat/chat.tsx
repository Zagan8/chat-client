import { Col, Input, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import { Message, messageStore } from "../../stores/messages-store";
import { observer } from "mobx-react-lite";
import { userStore } from "../../stores/user-store";
import MessageCard from "../../components/message-card/message-card";
import { SendOutlined } from "@ant-design/icons";
import classNames from "classnames";
import ChatForm from "./chat-form/chat-form";
interface Props {
  sendMessage: (message: Message) => void;
}
const Chat: React.FC<Props> = ({ sendMessage }) => {
  const messageBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messageBoxRef.current]);

  return (
    <>
      <Row className="chat">
        <Col span={24} ref={messageBoxRef} className="messages-box">
          {messageStore.messages?.map((message, index) => (
            <div
              key={index}
              className={classNames("message-card-container", {
                "author-message": message.author === userStore.currentUser,
              })}
            >
              <MessageCard message={message} />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ChatForm sendMessage={sendMessage} />
        </Col>
      </Row>
    </>
  );
};

export default observer(Chat);
