import { action, makeObservable, observable } from "mobx";

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

  @action
  deleteConnectedUser(userSocketId: string) {
    const indexOfUserToDelete = this.connectedUsers.findIndex(
      (connectedUser) => connectedUser.socketId === userSocketId
    );
    if (indexOfUserToDelete > -1) {
      this.connectedUsers.splice(indexOfUserToDelete, 1);
    }
  }
}

export const userStore = new UserStore();
