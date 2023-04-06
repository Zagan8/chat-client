import axios from "axios";
import { Message } from "../stores/messages-store";

const messageService = {
  getAllMessages: async () => {
    try {
      const users = await axios.get("http://localhost:8000/message");
      return users.data;
    } catch (e) {
      console.error(`failed bring messages with error ${e}`);
    }
  },
  createMessage: async (messageData: Message) => {
    try {
      const message = await axios.post("http://localhost:8000/message", {
        message: messageData,
      });
      return message.data;
    } catch (e) {
      console.error(`creating message with error ${e}`);
    }
  },
};

export default messageService;
