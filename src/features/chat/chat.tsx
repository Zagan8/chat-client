import { Input } from "antd";

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <div className="messages-box">
        <div> zalupa</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
      </div>
      <div className="input-container">
        <Input></Input> <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
