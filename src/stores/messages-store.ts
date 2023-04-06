import { action, makeObservable, observable } from "mobx";

export interface Message {
  _id?: string;
  author: string;
  text: string;

  createdAt?: string;
}
class MessageStore {
  @observable
  messages: Message[] = [];
  constructor() {
    makeObservable(this);

    console.log(this.messages);
  }

  setMessages(messagesInfo: Message[]) {
    console.log("davay", messagesInfo);
    if (messagesInfo) {
      this.messages = [...messagesInfo];
    }
  }
  @action
  setMessage(message: Message) {
    if (this.messages.find((m) => m._id === message._id)) {
      return;
    }

    this.messages.push(message);
  }
}

export const messageStore = new MessageStore();
