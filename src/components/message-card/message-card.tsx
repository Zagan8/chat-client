import React from "react";
import classNames from "classnames";
import { userStore } from "../../stores/user-store";
import dayjs from "dayjs";

interface Props {
  message: { text: string; author: string; createdAt?: string };
}
const MessageCard: React.FC<Props> = ({ message }) => {
  return (
    <div
      className={classNames("message-card", {
        "author-message": message.author === userStore.currentUser,
      })}
      style={{}}
    >
      <div className="message-author">{message.author}</div>
      <div className="message-text-time-container">
        <div className="message-text"> {message.text}</div>
        <div className="message-created-at">
          {dayjs(message.createdAt).format("HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
