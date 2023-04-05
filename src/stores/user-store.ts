import { makeObservable, observable } from "mobx";

export interface User {
  name: string;
  socketId: string;
}
class UserStore {
  @observable
  connectedUsers: User[] = [];

  @observable
  currentUser: string = "";
  constructor() {
    makeObservable(this);
  }

  setConnectedUsers(users: User[]) {
    this.connectedUsers = [...users];
  }
  setCurrentUser(userName: string) {
    this.currentUser = userName;
  }
}

export const userStore = new UserStore();
