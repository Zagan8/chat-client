import React from "react";
import { userStore } from "../../stores/user-store";
import { observer } from "mobx-react-lite";

const UsersPanel: React.FC = () => {
  return (
    <div className="users-panel">
      <div className="connected-user-header">Connected Users</div>
      {userStore.connectedUsers.map((user, index) => (
        <div className="connected-user" key={index}>
          #{index + 1} {user === userStore.currentUser ? user + "(you)" : user}
        </div>
      ))}
    </div>
  );
};

export default observer(UsersPanel);
