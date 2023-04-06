import { Button, Form, Input } from "antd";
import React from "react";
import { userStore } from "../../stores/user-store";
import { observer } from "mobx-react-lite";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket;
}

const Login: React.FC<Props> = ({ socket }) => {
  const onFinish = (name: { name: string }) => {
    userStore.setCurrentUser(name.name);

    socket.emit("log_in", userStore.currentUser);
  };

  return (
    <div className="login">
      <div className="form-container">
        <h1>Login to chat</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default observer(Login);
