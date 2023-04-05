import { Button, Col, Form, Input, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { userStore } from "../../../stores/user-store";
import React, { useState } from "react";
import { Message } from "../../../stores/messages-store";
import { useForm } from "antd/es/form/Form";

interface Props {
  sendMessage: (message: Message) => void;
}
const ChatForm: React.FC<Props> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>("");
  const [form] = Form.useForm();

  const onFinish = (message: { message: string }) => {
    form.resetFields();
    sendMessage({ author: userStore.currentUser, text: message.message });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      className="chat-form"
      name="chat-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <Row justify={"center"} style={{ alignItems: "center" }}>
          <Col span={22}>
            <Input placeholder="Message" />
          </Col>
          <Col>
            <Button
              htmlType={"submit"}
              className="send-button"
              icon={<SendOutlined type={"submit"} className="send-icon" />}
            />
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default ChatForm;
