import { Input } from "antd";
import { useState } from "react";
import { Message, messageStore } from "../../stores/messages-store";
import { observer } from "mobx-react-lite";
import { userStore } from "../../stores/user-store";
import MessageCard from "../../components/message-card/message-card";
import { SendOutlined } from "@ant-design/icons";
import classNames from "classnames";
interface Props {
  sendMessage: (message: Message) => void;
}
const Chat: React.FC<Props> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="chat">
      <div style={{ height: "85vh" }} className="messages-box">
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
      </div>
      <div className="input-container">
        <Input
          placeholder="   Enter message here"
          className="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendOutlined
          className="send-btn"
          onClick={() => {
            sendMessage &&
              sendMessage({ author: userStore.currentUser, text: message });
            setMessage("");
          }}
        />
      </div>
    </div>
  );
};

export default observer(Chat);
