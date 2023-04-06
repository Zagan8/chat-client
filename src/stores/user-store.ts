import { action, makeObservable, observable } from "mobx";

class UserStore {
  @observable
  connectedUsers: string[] = [];

  @observable
  currentUser: string = "";
  constructor() {
    makeObservable(this);
  }

  setConnectedUsers(users: string[]) {
    this.connectedUsers = [...users];
  }
  setCurrentUser(userName: string) {
    this.currentUser = userName;
  }

  @action
  deleteConnectedUser(userName: string) {
    const indexOfUserToDelete = this.connectedUsers.findIndex(
      (connectedUser) => {
        return connectedUser === userName;
      }
    );
    if (indexOfUserToDelete > -1) {
      this.connectedUsers.splice(indexOfUserToDelete, 1);
    }
  }
  @action
  addConnectedUser(user: string) {
    this.connectedUsers.push(user);
  }
}

export const userStore = new UserStore();
