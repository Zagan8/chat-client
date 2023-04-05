import { makeObservable, observable } from "mobx";

export interface Message {
  author: string;
  text: string;
}
class MessageStore {
  @observable
  messages: Message[] = [];
  constructor() {
    makeObservable(this);
  }

  setMessages(messagesInfo: Message[]) {
    console.log(messagesInfo);
    if (messagesInfo) {
      this.messages = [...messagesInfo];
    }
  }
}

export const messageStore = new MessageStore();
