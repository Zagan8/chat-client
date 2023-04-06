import { action, makeObservable, observable } from "mobx";

class UserStore {
  @observable
  connectedUsers: string[] = [];

  @observable
  currentUser: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  setConnectedUsers(users: string[]) {
    this.connectedUsers = [...users];
  }
  @action
  setCurrentUser(userName: string) {
    this.currentUser = userName;
  }
}

export const userStore = new UserStore();
