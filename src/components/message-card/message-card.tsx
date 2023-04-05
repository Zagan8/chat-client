import React from "react";
import classNames from "classnames";
import { userStore } from "../../stores/user-store";

interface Props {
  message: { text: string; author: string };
}
const MessageCard: React.FC<Props> = ({ message }) => {
  return (
    <div
      className={classNames("message-card", {
        "author-message": message.author === userStore.currentUser,
      })}
      style={{}}
    >
      {message.text}
    </div>
  );
};

export default MessageCard;
