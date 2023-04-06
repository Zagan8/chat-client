import { action, makeObservable, observable } from "mobx";

export interface User {
  name: string;
  _id: string;
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
  deleteConnectedUser(id: string) {
    const indexOfUserToDelete = this.connectedUsers.findIndex(
      (connectedUser) => {
        console.log(id, connectedUser._id);
        return connectedUser._id === id;
      }
    );
    if (indexOfUserToDelete > -1) {
      this.connectedUsers.splice(indexOfUserToDelete, 1);
    }
  }
}

export const userStore = new UserStore();
