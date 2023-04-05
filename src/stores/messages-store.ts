import { makeObservable, observable } from "mobx";

export interface Message {
  author: string;
  text: string;

  createdAt?: string;
}
class MessageStore {
  @observable
  messages: Message[] = [];
  constructor() {
    makeObservable(this);
  }

  setMessages(messagesInfo: Message[]) {
    if (messagesInfo) {
      this.messages = [...messagesInfo];
    }
  }
}

export const messageStore = new MessageStore();
