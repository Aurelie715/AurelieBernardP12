import Session from "./SessionUserData";
export default class UserData {
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map((element) => new Session(element));
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions;
  }
}
