import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/user-store";
import { observer } from "mobx-react-lite";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (name: { name: string }) => {
    userStore.setCurrentUser(name.name);
    navigate("/main");
  };
  return (
    <div className="form-container">
      <h1>Login to chat</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
  );
};

export default observer(Login);
