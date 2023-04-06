import { Col, Row } from "antd";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Message, messageStore } from "../../stores/messages-store";
import { observer } from "mobx-react-lite";
import { userStore } from "../../stores/user-store";
import MessageCard from "../../components/message-card/message-card";
import classNames from "classnames";
import ChatForm from "./chat-form/chat-form";
import messageService from "../../services/message-service";

interface Props {
  sendMessage: (message: Message) => void;
}

const Chat: React.FC<Props> = ({ sendMessage }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const messages = await messageService.getAllMessages();

      messageStore.setMessages(messages);
    };
    init();
  }, []);

  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageStore.messages.length]);

  return (
    <>
      <Row className="chat">
        <Col span={24} className="messages-box">
          {messageStore.messages?.map((message, index) => {
            const isAuthor = message.author === userStore.currentUser;

            return (
              <div
                key={index}
                className={classNames("message-card-container", {
                  "author-message": isAuthor,
                })}
              >
                <MessageCard message={message} />
              </div>
            );
          })}
          <div ref={bottomRef} />
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
