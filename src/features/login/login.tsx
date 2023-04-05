import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, userStore } from "../../stores/user-store";
import { observer } from "mobx-react-lite";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>();
  const onFinish = (name: { name: string }) => {
    userStore.setCurrentUser(name.name);
    navigate("/main");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const init = async () => {
      const storedName = localStorage.getItem("user");
      if (storedName) {
        navigate("/main");
      }
      const users = await axios.get("http://localhost:8000/");
      setUsers(users.data);
    };
    init();
  }, []);

  const checkIfUserExist = (userInput: string) => {
    const foundUser = users?.find((user) => user.name === userInput);
    return Boolean(foundUser);
  };

  return (
    <div className="login">
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
            rules={[
              { required: true, message: "Please enter your name" },
              {
                validator: (_, value) => {
                  if (checkIfUserExist(value)) {
                    return Promise.reject(
                      new Error("This user name already taken")
                    );
                  }
                  return Promise.resolve();
                },
                message: "This user name already taken",
              },
            ]}
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
